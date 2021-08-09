
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login/Login'
import CadastroSala from './Pages/CadastroSala/CadSala'
import CadastroEquipamento from './Pages/CadastroEquip/CadEquip'
import Cadastro from './Pages/Cadastro/Cad'

const routing = (
  <Router>
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/CadastroSala" component={CadastroSala}/>
          <Route path="/CadastroEquipamentos" component={CadastroEquipamento} />
          <Route path="/Cadastro" component={Cadastro} />
      </Switch>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
