import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {PostData} from '../services/PostData';

class Base extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.login = this.login.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    login(e) {
        e.preventDefault();
        PostData('login', this.state).then(result => {
            console.log(result.data.credential);
            console.log(localStorage.getItem('userToken'));
            // if(result.data.credential) {
            //     console.log("true");
            // } else {
            //     console.log("Hi");
            // }
        });
    }

    inputChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }

    render() {
        return (
            <div className="Base">
                <div className="login">
                    <div className="login__background" style={{backgroundImage: `url('https://assets.change.org/photos/2/bm/uq/YqBMuqatXqjxXLv-800x450-noPad.jpg?1529830051')`}}></div>
                    <div className="login__sidebar">
                        <h1>Sign In</h1>
                        <p>Connect with other Alumni Lyceans and get updated to the latest event of LPU!</p>
                        <div className="input-group">
                            <label>
                                Username:
                                <input
                                    type="text"
                                    name="username"
                                    className="login-input"
                                    placeholder="Username"
                                    onChange={this.inputChange}
                                />
                            </label>
                        </div>
                        <div className="input-group">
                            <label>
                                Password:
                                <input
                                    type="password"
                                    name="password"
                                    className="login-input"
                                    placeholder="Password"
                                    onChange={this.inputChange}
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="login-btn"
                            onClick={this.login}
                        >Login</button>
                        <div className="login__sidebar--information">
                            <a href="/">Forgot your password?</a><span>|</span><a href="/">Register your ID</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Base;

if (document.getElementById('base')) {
    ReactDOM.render(<Base />, document.getElementById('base'));
}
