import { useContext, useState } from "react"
import { CartContext } from "../CartContext";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  query,
  where,
  writeBatch,
  getDocs,
} from "firebase/firestore";
import { db } from "../db/firebaseConfig";
import CheckoutForm from "./CheckoutFrom";
import { BarLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState(null);

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        data: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        setError("Algunos productos están agotados.");
      }
    } catch (error) {
      setError("Se produjo un error al procesar su pedido..");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <h1 className="text-center py-4 text-5xl bg-[#F3F4F6]">
         PROCESANDO ORDEN
        </h1>
        <div className="my-5 flex justify-center">
          <BarLoader color="#111312" height={7} width={100} className="my-5" />
        </div>
      </>
    );
  }

  if (orderId) {
    return (
      <>
        <h1 className="text-center py-14 text-5xl bg-[#F3F4F6]">
          Su orden es: {orderId}
        </h1>
        <p className="text-center py-28 text-2xl">Gracias por su compra!</p>
        <Link to="/" className="flex justify-center">
          <button className="rounded-full border border-[#E5E7EB] py-5 px-5 my-10 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white uppercase">
            Sigue comprando
          </button>
        </Link>
      </>
    );
  }

  return (
    <>
      <h1 className="text-center py-14 mb-2 text-5xl bg-[#F3F4F6]">Checkout</h1>
      {error && (
        <p className="text-center text-red-500 text-lg mt-4">{error}</p>
      )}
      <CheckoutForm onConfirm={createOrder} />
    </>
  );
};

export default Checkout;