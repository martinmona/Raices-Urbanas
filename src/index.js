// Dependencias
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

// Rutas
import AppRutas from './rutas';

// Assets
import './index.css';

import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <AppRutas/>
    </Router>,
     document.getElementById('root')
);
registerServiceWorker();
