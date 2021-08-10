import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory,Link } from "react-router-dom";
import eyeOpen from '../../Assets/Img/eye.png';
import EyeClosed from '../../Assets/Img/hidden.png';
import Logotype from '../../Assets/Img/logoProjeto.png';
import cadastro from '../Cadastro/Cad'


function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState('');
    const [Visible, setVisible] = useState(true);


    function EyeFunctionPassword(){
        setVisible(!Visible)
        console.log('mudou')
    }

    function ExecuteLogin(Event){
        Event.preventDefault();
        setError('')

        axios.post('http://localhost:5000/api/Login', {
            Email : email,
            Senha : pwd
          })
          .then(rps =>{

                console.log(rps.data.token)
                localStorage.setItem('@jwt', rps.data.token);
                               
                history.push('/Listagem')                       
            })
            .catch(error =>{
                console.log(error)
                setError('Email Ou Senha Incorreto')
            })       
            
    }
    
  let history = useHistory();
  
  return (
    <body id="BodyLogin">
        <main id="MainLogin">

            <div className="box-login-Inside">

                <div className="Box-Left-side-Login"> 

                    <div className="Box-Img-Login">
                        <img src={Logotype} Class="Logo-Login-Mobile-Top"alt="Logo do site"/>
                    </div>

                    <div className="Login-Links"> 
                        <div>
                        <Link to="/Login" style={{textDecoration:'none', color: '#000'}}><p>Login</p></Link>
                            <hr className="BarStatus"/>
                        </div>  
                        <div className="SideRight-Login-Links">
                            <Link to="/Cadastro" style={{textDecoration:'none', color: '#000'}}><p>Cadastro</p></Link>
                            <hr className="BarStatus2"/>
                        </div> 
                    </div>   
                    <div style={{marginBottom: 25}}>   
                        <form  className="Box-Inpt-Login" onSubmit={ExecuteLogin}>

                            <input
                                className="Inpt-Login" 
                                type="email"
                                placeholder="Email :"
                                value={email}
                                onChange={ event => setEmail(event.target.value)}
                            />
                            <input
                                className="Inpt-Login" 
                                type={Visible === false ? "Text" : "Password"}
                                placeholder="Senha :"
                                onChange={ event => setPwd(event.target.value)}
                                value={pwd}
                            />
                            {
                                Visible === false ? <img src={eyeOpen}   className="OlhoMagico" alt="Olho Do Site" onClick={() => EyeFunctionPassword()}/> : <img src={EyeClosed} className="OlhoMagico" alt="Olho Do Site" onClick={() => EyeFunctionPassword()}/>
                            }

                            <p style={{color: 'red'}}>{error}</p>

                      

                            <div className="Access-Btn">
                            <button className="btn-Login" type="submit">Acessar</button>
                            </div>

                        </form >
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
  );
}





export default Login;
