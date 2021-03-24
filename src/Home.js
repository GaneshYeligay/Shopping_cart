import React, { Component } from 'react';
import "./Home.css"
import { Button } from "@material-ui/core";
import Banner from "./Banner"
import { Link } from 'react-router-dom'
class Home extends Component {

  render() {
    return (
      <div className="home_banner">
        <Banner />
        <div className="home__section">
          <center>
            <h2>Only the Highest Quality Ingredients</h2>
            <p>In fact, We grow most of the ourselves on our 70-acre farm!</p>
          </center>
          <div className="home__banner">
            <div className="row col-12">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <img
                  className="home__img"
                  src="https://www.thespruceeats.com/thmb/_pkTfwEHtJl3oLcPjJP7lu1CoJs=/1419x1419/smart/filters:no_upscale()/GettyImages-93605288-582b45af5f9b58d5b1344dfd.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <img
                  className="home__img"
                  src="https://www.thespruceeats.com/thmb/_pkTfwEHtJl3oLcPjJP7lu1CoJs=/1419x1419/smart/filters:no_upscale()/GettyImages-93605288-582b45af5f9b58d5b1344dfd.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <img
                  className="home__img"
                  src="https://www.thespruceeats.com/thmb/_pkTfwEHtJl3oLcPjJP7lu1CoJs=/1419x1419/smart/filters:no_upscale()/GettyImages-93605288-582b45af5f9b58d5b1344dfd.jpg"
                  alt=""
                />
              </div>
            </div>

          </div>
          <div className="home__btn">
            <Link to={"/shop"}>
              <Button variant='outlined'>Shop Now</Button></Link>
          </div>

          {/* <div id="demo" class="carousel slide" data-ride="carousel">


            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>


            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://img1.goodfon.com/wallpaper/nbig/9/b7/eda-kukuruza-zlaki-zheltyy.jpg" alt="Los Angeles" width="1100" height="500" />
              </div>
              <div class="carousel-item">
                <img src="https://img1.goodfon.com/wallpaper/nbig/9/b7/eda-kukuruza-zlaki-zheltyy.jpg" alt="Chicago" width="1100" height="500" />
              </div>
              <div class="carousel-item">
                <img src="https://img1.goodfon.com/wallpaper/nbig/9/b7/eda-kukuruza-zlaki-zheltyy.jpg" alt="New York" width="1100" height="500" />
              </div>
            </div>


            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;