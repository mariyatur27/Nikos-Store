import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import { CallMissedSharp } from '@material-ui/icons'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'
import '../Home/hero.css'

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {

  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant='subtitle1'>
        You currently have no itmes in your shopping cart. The cart is empty!<br></br>
        <a href='/products' className={classes.link}>Start adding some products to your cart!</a>
    </Typography>
  );

  const FilledCart = () => (
    <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid>
        <div className='card-details'>
            <Typography variant='h5'>
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div className='checkout-btns'>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
                <a href='/checkout'><Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button></a>
            </div>
        </div>
    </>
  );

  if(!cart.line_items) return 'Loading...'

  return (
    <Container>
        <div className={classes.toolbar}/>
        <Typography className={classes.title} variant='h4' gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
}

export default Cart