import React , {useState, useEffect} from 'react'
import { Products, Navbar, Cart , Checkout} from './components'
import Hero from './components/Home/Hero'
import { Footer } from './components/Navbar/footer'
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  console.log(commerce.cart.retrieve())

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  // const checkQuantity = async (checkoutTokenId, lineItemId, variantData) => {
  //   var quantity = await commerce.checkout.checkQuantity(checkoutTokenId, lineItemId, variantData)
  //   return quantity
  // }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity)
    // checkQuantity(checkoutTokenId, productId, {amount: 3})
    console.log(cart)
    window.location.reload()
    // setCart(cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, {quantity});
    window.location.reload()
    // setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    window.location.reload()
    // setCart(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    window.location.reload()
    // setCart(cart)
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.mesage);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <>
    <Navbar totalItems={cart.total_items}/>
    <Router>
        <Routes>
          <Route path='/' element={<Hero/>} />
          <Route path='/products' element={<Products products = {products} onAddToCart = {handleAddToCart}/>} />
          <Route path='/cart' element={<Cart cart={cart} 
            handleUpdateCartQty = {handleUpdateCartQty}
            handleRemoveFromCart = {handleRemoveFromCart}
            handleEmptyCart = {handleEmptyCart}
          />} />
          <Route path='/checkout' element={<Checkout 
            cart={cart} 
            order={order}
            handleCaptureCheckout={handleCaptureCheckout}
            error={errorMessage}
          />} />
        </Routes>
    </Router>
    <Footer />
    </>
  )
}

export default App