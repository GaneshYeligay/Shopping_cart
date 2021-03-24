import React, { Component, useState } from "react";
import "./Signin.css"
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
      
    render() {
        return (
            <form>
                 <div className="signup" style={{padding: "50px"}}>
                <div className="signin_form">
                <h3>Sign In</h3>
            
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
                </div>
                <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
            </form>
        );
    }
}