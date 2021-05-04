import React, { Component } from 'react'
import './Auth.css';

export class Auth extends Component {
    render() {
        return (
            <div class="auth">
                <div class="cont">
                    <div class="form">
                        <h2> Sign In </h2>
                        <label>
                            <span>Email Address</span>
                            <input type="email" name="email" />
                        </label>
                        <label>
                            <span> Password </span>
                            <input type="password" name="password" />
                        </label>
                        <button class="submit" type="button"> Sign In </button>
                        <p class="forgot-pass"> Forgot Password ? </p>
                        <div class="social-media">
                            <ul>
                                <li><img src="img/social-media/facebook.png"/></li>
                                <li><img src="img/social-media/twitter.png"/></li>
                                <li><img src="img/social-media/linkedin.png"/></li>
                                <li><img src="img/social-media/instagram.png"/></li>
                            </ul>
                        </div>
                    </div>
                    <div class="sub-cont">
                        <div class="img">
                            <div class="img-text">
                                <h2>New here?</h2>
                                <p>Sing up and discover great amount of new opportunities! </p>
                            </div>
                            <div class="img-text">
                                <h2>One of us?</h2>
                                <p>If yoy already has an account, just sign in. We'ev missed you! </p>
                            </div>
                            <div class="img-btn"> 
                            {/* onClick={togglefunc} */}
                                <span class="m-up">Sign Up</span>
                                <span class="m-in">Sign In</span>
                            </div>
                        </div>
                        <div class="form sign-up">
                            <h2>Sign Up</h2>
                            <label>
                                <span>Name</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Email</span>
                                <input type="email"/>
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="password"/>
                            </label>
                            <label>
                                <span>Confirm Password</span>
                                <input type="password"/>
                            </label>
                            <button type="button" class="submit">Sign Up Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// document.getElementById('.img-btn').addEventListener('click', function()
// 	{
// 		document.getElementById('.cont').classList.toggle('s-signup')
// 	}
// );

export default Auth
