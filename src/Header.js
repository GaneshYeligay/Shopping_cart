import React, { Component } from 'react';
import './Header.css'
import { Button } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Signup from "./Signup"
import { Link } from 'react-router-dom'
class Header extends Component {
render(){
    return(
        <div className="header">
        <div className="header__left">
            <nav>
            <ul>
  <li><a href="/shop">Shop</a></li>
  <li><a href="/">Our Story</a></li>
  <li><a href="/">Blog</a></li>

</ul>
               
            </nav>
        </div>
        <div className="header__center">
            <h2>Hester</h2>
        </div>
        <div className="header__right">
            {/* <InstagramIcon /> */}
            <ShoppingCartIcon style={{cursor: 'pointer', fontSize: 'large'}} />
            
            <Link to={'/signup'}>
            <Button variant='outlined'>Log in</Button>
</Link>
        </div>
        </div>
        
    );
}
}

export default Header