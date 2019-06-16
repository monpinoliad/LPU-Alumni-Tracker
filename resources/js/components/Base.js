import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';

class Base extends Component {
    render() {
        return (
            <div className="Base">
                <Landing />
            </div>
        );
    }
}

export default Base;

if (document.getElementById('base')) {
    ReactDOM.render(<Base />, document.getElementById('base'));
}
