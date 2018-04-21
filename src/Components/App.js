//Dependencias
import React, { Component } from 'react';

//Componentes
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../Data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Menu" items={items}/>
        <Content />
        <Footer copyright="&copy; hecho por Martin Mona"/>
      </div>
    );
  }
}

export default App;
