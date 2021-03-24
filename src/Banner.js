import React, { Component } from 'react';
import "./Banner.css"
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom'

class Banner extends Component {
    render() {
        return(
           <div className = "banner">
               <div className = "banner-btn">
               <Link to={'/shop'}>
            <Button variant='outlined'>Shop Now</Button>
</Link>
           </div>
           </div>
        ); 

    }
}

export default Banner;