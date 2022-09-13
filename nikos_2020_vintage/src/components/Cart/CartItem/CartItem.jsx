import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'
import useStyles from './styles'

const CartItem = ({item , onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cartItem}>
        <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
        <CardContent className={classes.cardContent}>
            <Typography variant='h6' className={classes.nameText}>{item.name}</Typography>
            <Typography variant='h5' className={classes.cartText}>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={classes.CardActions} >
            <div className={classes.buttons}>
                <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id , item.quantity - 1)}>-</Button>
                <Typography>{item.quantity}</Typography>
                <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id , item.quantity + 1)}>+</Button>
            </div>
            <Button variant='contained' type='button' color='secondary' onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem