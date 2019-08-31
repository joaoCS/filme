import React, {Component} from "react";
import Routes from './routes';

import './style.css';

export default class App extends Component {
    
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="app">
                <Routes />
            </div>
        ) ;
    }
}


