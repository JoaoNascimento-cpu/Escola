import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "../../Assets/Css/Escola.css"
import Logotype from '../../Assets/Img/logoProjeto.png'


function Cad() {
  let history = useHistory();

  return (
        <body id="BodyCadastro">
          <main id="MainCadastro">

                <div className="box-Cadastro-Inside">

                <div className="Box-Left-side-Cadastro"> 

                    <div className="Box-Img-Cadastro">
                        <img src="Img/logoProjeto.png" Class="Logo-Cadastro-Mobile-Top"alt="Logo do site"/>
                    </div>

                    <div className="Cadastro-Links"> 
                        <div>
                            <a href="Cadastro.html">Cadastro</a>
                            <hr className="BarStatus"/>
                        </div>  
                        <div className="SideRight-Cadastro-Links">
                            <a href="#">Login</a>
                            <hr className="BarStatus2"/>
                        </div> 
                    </div>   

                    <div style={{marginBottom: 25}}>   
                        <form  className="Box-Inpt-Cadastro">
                            <input
                                className="Inpt-Cadastro" 
                                type="name"
                                placeholder="Nome :"
                            />
                            <input
                                className="Inpt-Cadastro" 
                                type="email"
                                placeholder="Email :"
                            />
                            <input
                                className="Inpt-Cadastro" 
                                type="password"
                                placeholder="Senha :"
                            />
                            <input
                                className="Inpt-Cadastro" 
                                type="password"
                                placeholder="Confirme sua senha :"
                            />

                            <div className="SendRead">
                            <div className="custom-checkbox">
                                <input type="checkbox" id="checkbox-1"/>
                                <label for="checkbox-1">Li e concordo com os termos</label>
                            </div>
                            </div>

                            <div className="Access-Btn">
                            <button className="btn-Cadastro">Acessar</button>
                            </div>
                        </form>
                    </div>    
                </div>

                <div>
                    <div className="boxImageCadastro">
                        <div className="Line-Cadastro"></div>
                        <img src={Logotype} Class="Logo-Cadastro-Mobile"alt="Logo do site"/>
                    </div>
                </div>

                </div>

          </main>
      </body>
  );
}





export default  Cad;
