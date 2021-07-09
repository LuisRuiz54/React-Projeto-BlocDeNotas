import React, { Component} from 'react';

class FormularioCadastro extends Component {
    render(){
        return (
          <form>
            <input type="text" placeholder="Titulo"/>
            <textarea placeholder="Escriva sua Nota aqui..."></textarea>
            <button>Criar Nota</button>
          </form>
        )
    }
}

export default  FormularioCadastro;