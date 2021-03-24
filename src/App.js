import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Banner from "./Banner"
import Home from "./Home";
import Footer from "./Footer"
import Signup from "./Signup"
import Signin from "./Signin"
import Shop from "./Shop"
// import Customers from './Customers'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (
      <Router>
      <div className="App">
        <Header/>
              
            <Switch>
              
                <Route path="/signup" exact={true}>
                <Signup />
              </Route>
              <Route path="/signin" exact={true}>
                <Signin />
              </Route>
               
              
              <Route path="/" exact={true}>
                <Home />
              </Route>
              <Route path="/shop" exact={true}>
                <Shop />
              </Route>
            </Switch>
        
         <Footer/>
     </div>
    </Router>
    //   <Router basename={process.env.PUBLIC_URL}>
    //     <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Simple React App</h1>
    //     </header>
    //       <Switch>
    //             <Route exact path= "/" render={() => (
    //               <Redirect to="/customerlist"/>
    //             )}/>
    //              <Route exact path='/customerlist' component={Customers} />
    //       </Switch>
    //   </div>
     
    // </Router>
  //   <Router>
  //     <Switch>
  //     <Header />
  //   <Banner />
  //     </Switch>
  
    
  // </ Router>
    );
  }
}

export default App;
