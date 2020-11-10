import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    //garantindo as funções o acesso ao this:
    this.clickOne = this.clickOne.bind(this)
    this.clickTwo = this.clickTwo.bind(this)
    this.clickTree = this.clickTree.bind(this)
    //adicionando estado ao componente:
    this.state = {
      numeroDeCliques: 0
    }
  }

  clickOne() {
    console.log('Clicou no botão ONE!');
    console.log(this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques +1
    }))
  }
  clickTwo() {
    console.log('Clicou no botão TWO!');
    console.log(this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques +1
    }))
  }
  clickTree() {
    console.log('Clicou no botão TREE!');
    console.log(this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques +1
    }))
  }
  render() {
    return <div>
      <button onClick={this.clickOne}>Meu botão</button>
      <button onClick={this.clickTwo}>Meu botão</button>
      <button onClick={this.clickTree}>Meu botão</button>
    </div>
  }
}

export default App;
