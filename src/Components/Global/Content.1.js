import React, { Component } from 'react';
import './CSS/Content.css';

class Content extends Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      numero1: 0,
      numero2: 0,
      resultado: 0
    };

    this.handleCountClick = this.handleCountClick.bind(this);
    
  }

componentDidMount(){
  this.setState({
    count: 1
  })
}

handleCountClick(e){
  switch(e.target.id){
    case 'sumar':
      this.setState({
        count: this.state.count+1
      });
      break;
      
    case 'restar':
      this.setState({
        count: Math.max(this.state.count-1,0)}
      );
      break;
    case 'reset':
      this.setState({
        count: 0
      });
      break;

    default:
      console.log('id invalido');
      break;

  }
}

handleResultClick(e){
  this.setState({
    resultado: this.state.numero1+this.state.numero2
  });
}

cambioNumero(e){
  if(e.target.id==='numero1'){
    this.setState({
      numero1:Number(e.target.value)
    });
  }
  else if(e.target.id==='numero2'){
    this.setState({
      numero2:Number(e.target.value)
    });
  }

}

  render() {
    return (
      <div className="Content">
        <h2> Contador: {this.state.count}</h2>

        <p>
        <p>hola</p>
          <button id="sumar" onClick={this.handleCountClick}>+</button>
          <button id="restar" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>

        <h2> Calculadora </h2>
        <p>
          <input id="numero1" type="number" value={this.state.numero1} onChange={this.cambioNumero.bind(this)}/>
          +
          <input id="numero2" type="number" value={this.state.numero2} onChange={this.cambioNumero.bind(this)}/>
          <button id="resultado" onClick={this.handleResultClick.bind(this)}>Resultado</button>
          {this.state.resultado}
        </p>
      </div>
    );
  }
}

export default Content;
