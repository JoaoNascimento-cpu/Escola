import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

import '../../Assets/Css/Login.css'

import Header from '../../Components/Header'



function Login() {
  let history = useHistory();
  

  return (
    <div>
        <Header />
        <body id="BodyLogin">
          <div id="mainLogin">
            <div id="box-login-inside">
              <div className="Box-Img-Login">
                <img src="Img/logoProjeto.png" Class="Logo-Login-Mobile-Top"alt="Logo do site"></img>
              </div>
              <div className="Login-Links"></div>
            </div>
          </div>
        </body>
    </div>
  );
}





export default Login;
