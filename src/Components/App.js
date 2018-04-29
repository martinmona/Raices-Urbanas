//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Componentes
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../Data/menu';

class App extends Component {
  static propTypes = {
  children: PropTypes.object.isRequiered
};
  render() {
    const {children}=this.props;
    return (
      <div className="App">
        <Header title="Menu" items={items}/>
        <Content body={children} />
        <Footer />
      </div>
    );
  }
}

export default App;
