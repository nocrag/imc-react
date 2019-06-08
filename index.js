import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      peso: 0,
      altura: 0,
      resultado: 0,
    };
  }

clique = (evento) => {
  const peso = this.state.peso;
  const altura = this.state.altura;
  const resultado = peso/(altura*altura);
  this.setState ({resultado: resultado})
  const mensagem = this.state.peso == 0 || this.state.altura == 0 ? 'Preencha uma valor maior que 0' : ''
  this.setState ({ mensagem: mensagem })
}
digitou = (evento) => {
  this.setState({ [evento.target.name]: evento.target.value});
}
  render() {
    return (
    <div className="calculadora">
      <p> Digite sua altura </p>
        <input 
          onChange={this.digitou} 
          name="altura" 
          value={this.state.altura} 
          type="number"
        >
      </input>
      <p> Digite seu peso </p>
        <input 
          onChange={this.digitou} 
          name="peso" 
          type="number" 
          value={this.state.peso}
        >
        </input>
      <div>
      <br></br>  
        <button 
          className="button-calcular" 
          onClick={this.clique}
        >
          <p>Calcular IMC</p>
        </button>
      </div>    
      <p>Resultado: {this.state.resultado} </p>  
      <p> {this.state.mensagem} </p>
    </div>  
    );
  }
}

render(<App />, document.getElementById('root'));
