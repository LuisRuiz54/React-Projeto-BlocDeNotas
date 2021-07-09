import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';

function App() {
  return (
    <section>
    <form>
      <input type="text" placeholder="Titulo"/>
      <textarea placeholder="Escriva sua Nota aqui..."></textarea>
      <button>Criar Nota</button>
    </form>
    <ListaDeNotas/> 
    </section>
  );
}

export default App;
