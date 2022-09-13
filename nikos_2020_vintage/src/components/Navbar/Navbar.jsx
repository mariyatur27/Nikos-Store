import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, withWidth} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import logo from '../../assets/nikos_logo.png'
import useStyles from './styles'
import '../Home/hero.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';


const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  console.log(totalItems)

  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <a href='/' className={classes.logoLink}>
                <Typography variant='h6' className={classes.title} color="inherit">
                    <img src={logo} alt="NIKOS 2020 Vintage" height='80px' className={classes.image}/>
                    NIKOS 2020 Vintage
                </Typography>
                </a>
                <div className='navLinks'>
                    <a href='/#main-sec-2' style={{marginRight: '1%', width: '100%'}}><h2 style={{fontWeight: '100'}}>About Us</h2></a>
                    <a href='/#main-sec-1' style={{marginRight: '1%', width: '100%'}}><h2 style={{fontWeight: '100'}}>Our Story</h2></a>
                    <a href='/products' style={{marginRight: '1%', width: '100%'}}><h2 style={{fontWeight: '100'}}>Products</h2></a>
                    <a href='/#footer' style={{marginRight: '1%', width: '100%'}}><h2 style={{fontWeight: '100'}}>Contacts</h2></a>
                </div>
                <div className={classes.grow}/>
                <div className={classes.button}>
                    <a href='/cart'>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    </a>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar