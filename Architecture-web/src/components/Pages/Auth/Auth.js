import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import $ from "jquery";
import './Auth.css';

export class Auth extends Component {
    state = {
        response: '',
        name:'',
        email:'',
        password: '',
        responseToPost: '',
      };
    //   componentDidMount() {
    //     this.callApi()
    //       .then(res => this.setState({ response: res.express }))
    //       .catch(err => console.log(err));
    //   }
    //   callApi = async () => {
    //     const response = await fetch('/Auth');
    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    //   };
      handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/Auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password: this.state.password ,email: this.state.email, name: this.state.name }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
      };


 // document.getElementById('.img-btn').addEventListener('click', function()
// 	{
// 		document.getElementById('.cont').classList.toggle('s-signup')
// 	}
// );
  componentDidMount() {
    $('.img-btn').click(function() {
      $('.cont').toggleClass('s-signup');
    });
  }

  responseGoogle=(response)=>{
      console.log(response);
      console.log(response.profileObj);
  }
    render() {
        return (
            <div class="auth">
                <div class="cont">
                    <form class="form" >
                        <h2> Sign In </h2>
                        <label >
                            <span>Your Name</span>
                            <input type="text" name="name" 
                                // placeholder="email@gmail.com"
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })}
                            />
                        </label>
                        <label>
                            <span>Email Address</span>
                            <input type="email" name="email" 
                                // placeholder="email@gmail.com"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                            />
                        </label>
                        <label>
                            <span> password </span>
                            <input type="password" 
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                        </label>
                        <button class="submit" type="button" onClick={this.handleSubmit}> Sign In </button>
                        <p class="forgot-pass"> Forgot Password ? </p>
                        <p>{this.state.responseToPost}</p>
                        <div>
                            <GoogleLogin
                            clientId="1088933812059-049k65k95k3godg5fbj4vtau26te2mjd.apps.googleusercontent.com"
                            buttonText="Login with your google account"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        {/* <div class="social-media">
                            <ul>
                                <li><img src="img/social-media/facebook.png"/></li>
                                <li><img src="img/social-media/twitter.png"/></li>
                                <li><img src="img/social-media/linkedin.png"/></li>
                                <li><img src="img/social-media/instagram.png"/></li>
                            </ul>
                        </div> */}
                    </form>
                    
                    <div class="sub-cont">
                        <div class="img">
                            <div class="img-text m-in">
                                <h2>New here?</h2>
                                <p>Sign up and discover great amount of new opportunities! </p>
                            </div>
                            <div class="img-text m-up">
                                <h2>One of us?</h2>
                                <p>If yoy already has an account, just sign in. We've missed you! </p>
                            </div>
                            <div class="img-btn"> 
                            
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
