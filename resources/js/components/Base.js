import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Base extends Component {
    render() {
        return (
            <div className="Base">

            </div>
        );
    }
}

if (document.getElementById('base')) {
    ReactDOM.render(<Base />, document.getElementById('base'));
}
