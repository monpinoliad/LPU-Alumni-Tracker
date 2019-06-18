import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Base extends Component {
    render() {
        return (
            <div className="Base">
                <div className="login">
                    <div className="login__background" style={{backgroundImage: `url('https://assets.change.org/photos/2/bm/uq/YqBMuqatXqjxXLv-800x450-noPad.jpg?1529830051')`}}></div>
                    <div className="login__sidebar">
                        <h1>Sign In</h1>
                        <p>Connect with other Alumni Lyceans and get updated to the latest event of LPU!</p>
                        <form>
                            <div className="input-group">
                                <label>
                                    Username:
                                    <input type="text" className="login-input" value="{{ old('email') }}" placeholder="Username" />
                                </label>
                            </div>
                            <div className="input-group">
                                <label>
                                    Password:
                                    <input type="password" className="login-input" placeholder="Password" />
                                </label>
                            </div>
                            <button type="submit" className="login-btn">Login</button>
                            <div className="login__sidebar--information">
                                <a href="/">Forgot your password?</a><span>|</span><a href="/">Register your ID</a>
                            </div>
                        </form>
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
