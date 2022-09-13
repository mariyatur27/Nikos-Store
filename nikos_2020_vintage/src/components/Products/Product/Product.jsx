import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons'

import useStyles from './styles';

const Product = ({ product, onAddToCart}) => {
  const classes = useStyles();

  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <div>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} tite={product.name}/>
            <CardContent>
                <div className={classes.cardContentMain}>
                    <Typography variant='h6' gutterBottom className={classes.cardContent}>
                        {product.name}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html:product.description}} variant='body2' color='textSecondary' />
                </div>
                <Typography variant='body1' style={{paddingTop: '7%'}}>
                    {product.price.formatted_with_symbol}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to Cart' onClick={handleAddToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    </div>
  )
}

export default Product