import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckOut from './components/CheckOut';
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'

function App() {
  
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route exact path="/queesartesania" element={<p>Que es una artesania</p>} />
            <Route exact path="/contacto" element={<h1>Contacto</h1>} />
            <Route exact path="/checkout" element={<CheckOut/>} />
            <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
