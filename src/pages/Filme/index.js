import React, { Component } from 'react';

import './estilo.css';

export default class Filme extends Component {
    constructor (props) {
        super(props);
        this.state = {
            filme: []
        };
    }
    
    async componentDidMount() {
        
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        this.setState({filme: json});
    }

    render () {
        return (
            <div className="filme-info">
                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto}/>
                {this.state.filme.length !== 0 && <div><h3>Sinopse</h3><br/></div>}
                {this.state.filme.sinopse}
            </div>
        );
    }
}