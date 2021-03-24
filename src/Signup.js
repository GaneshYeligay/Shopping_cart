import React, { Component } from "react";
import "./Signup.css"
import { Link } from 'react-router-dom'
export default class SignUp extends Component {
    render() {
        return (
            <form>
                <div className="signup" style={{ padding: "50px" }}>
                    <div className="signup_form">
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <Link to={'/signin'}><a>sign in?</a></Link>
                        </p>
                    </div>
                </div>
            </form>
        );
    }
}