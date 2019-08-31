import React, {Component} from "react";
import './header.css';
import { Link } from 'react-router-dom';


export default class Header extends Component {
    
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="header">
                <Link to="/">Filmaria</Link>
            </div>
        ) ;
    }
}


