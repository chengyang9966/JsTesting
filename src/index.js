import React from 'react';
import ReactDOM from 'react-dom';
import App from './Compnents/App';
import Root from'root'
import {BrowserRouter,Route} from 'react-router-dom'

ReactDOM.render(
<Root>
    <BrowserRouter>
    <Route path='/' component={App}/>
    </BrowserRouter>

</Root>
    
    ,document.querySelector('#root'))