import React, { Component } from 'react';
import "./style.css"

class CardNota extends Component {
    render() { 
        return ( 
            <section className="card-nota">
              <header>
               <h3>Titulo</h3>
              </header>
             <p>Escriva sua Nota aqui</p>
            </section>
        
               );
    }
}
 
export default CardNota;

