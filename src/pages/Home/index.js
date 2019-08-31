import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmes: []
        };

        this.loadFilmes = this.loadFilmes.bind(this);
    }

   async componentDidMount() {
        this.loadFilmes();
    }
    
    async loadFilmes() {
        const response = await fetch('https://sujeitoprogramador.com/r-api/?api=filmes/')
        const json = await response.json();

        this.setState({filmes: json});
    }

    render() {
        return (
            <div className="container">
                <div className="lista-filmes">
                    { this.state.filmes.map(filme => {
                        return (
                            <article key={filme.id} className="filme">
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt="Capa"/>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        );
                    }) }
                </div>
            </div>
        );
    }
}

