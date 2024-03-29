import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './CartContext'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Cart from './componentes/Cart'
import Checkout from './componentes/Checkout'
import Gallery from './componentes/Gallery'
import MiComponente from './componentes/MiComponente'
import Footer from './componentes/Footer'
import Header from './componentes/Header'



function App() {
  
  return (
    
    <div className="app">
      <BrowserRouter>
      <CartProvider>
      <Header/>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/MiComponente' element={<MiComponente />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      <Footer/>
      </CartProvider>
       </BrowserRouter>
    </div>
      
   
  );
}


export default App;