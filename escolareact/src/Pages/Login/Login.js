import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import eyeOpen from '../../Assets/Img/eye.png';
import EyeClosed from '../../Assets/Img/hidden.png';
import Logotype from '../../Assets/Img/logoProjeto.png';

<<<<<<< HEAD
import '../../Assets/Css/Login.css'

import Header from '../../Components/Header'
=======
function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState('');
    const [Visible, setVisible] = useState(true);


    function EyeFunctionPassword(){
        if(Visible == true){
            setVisible(false)
        }else if(Visible == false){
            setVisible(true)
        }


    }
>>>>>>> 9a4612fc3560a8a545c2c5a555602b22eb7ed258



  let history = useHistory();
  

  return (
<<<<<<< HEAD
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
=======
    <body id="BodyLogin">
        <main id="MainLogin">

            <div className="box-login-Inside">

                <div className="Box-Left-side-Login"> 

                    <div className="Box-Img-Login">
                        <img src={Logotype} Class="Logo-Login-Mobile-Top"alt="Logo do site"/>
                    </div>

                    <div className="Login-Links"> 
                        <div>
                            <p>Login</p>
                            <hr className="BarStatus2"/>
                        </div>  
                        <div className="SideRight-Login-Links">
                            <p>Cadastro</p>
                            <hr className="BarStatus"/>
                        </div> 
                    </div>   
                    <div style={{marginBottom: 25}}>   
                        <form  className="Box-Inpt-Login">

                            <input
                                className="Inpt-Login" 
                                type="email"
                                placeholder="Email :"
                            />
                            <input
                                className="Inpt-Login" 
                                type="password"
                                placeholder="Senha :"
                            />
                            {
                                Visible == true ? <img src={eyeOpen}   className="OlhoMagico" alt="Olho Do Site" onClick={EyeFunctionPassword}/> : <img src={EyeClosed} className="OlhoMagico" alt="Olho Do Site"/>
                            }


                            <div className="SendSenha">
                                <p className="Snd-Txt-Senha">Esqueci minha Senha*</p>
                            </div>

                            <div className="Access-Btn">
                            <button className="btn-Login">Acessar</button>
                            </div>

                        </form>
                    </div>    
                </div>  
                <div>
                    <div className="boxImageLogin">
                        <div className="Line-Login"></div>
                        <img src={Logotype} Class="Logo-Login-Mobile"alt="Logo do site"/>
                    </div>
                </div>
            </div>
        </main>
    </body>
>>>>>>> 9a4612fc3560a8a545c2c5a555602b22eb7ed258
  );
}





export default Login;
