// Dependencias
import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import App from './Components/App';
import About from './Components/About';
import Contacto from './Components/Contacto';
import Home from './Components/Home';
import Pagina404 from './Components/Pagina404';

const AppRutas = () =>
    <App>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contacto" component={Contacto}/>
            <Route path="/" component={Home}/>
            <Route component={Pagina404}/>
        </Switch>
    </App>;

export default AppRutas;