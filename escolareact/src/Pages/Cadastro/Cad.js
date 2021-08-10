import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import "../../Assets/Css/Escola.css"
import Logotype from '../../Assets/Img/logoProjeto.png'
import { Link } from "react-router-dom";
import axios from 'axios';



function Cad() {
  let history = useHistory();

  const [email, SetEmail] = useState('')
  const [pwd, Setpwd] = useState('')
  const [ReplyPwd, SetReplyPwd] = useState('')
  const [errorRply, SetErrorReplyPwd] = useState('')

  function ExecuteCad(event){
     event.preventDefault(); 
    
      if(pwd != ReplyPwd){
          console.log('é diferente')
          SetErrorReplyPwd('Senhas são diferentes')

      }else{
          console.log('é igual')
          SetErrorReplyPwd('')

          axios.post(
            axios.post('http://localhost:5000/api/Usuario',{
                Email : email,
                Senha : pwd
            }
          )
              .then(rps =>{
    
                    console.log(rps.status)
                                   
                    history.push('/Login')                       
                })
                .catch(error =>{
                    console.log(error)
                })      
                )
      }
  }
  

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
                        <Link to="/Cadastro" style={{textDecoration:'none', color: '#000'}}><p>Cadastro</p></Link>
                            <hr className="BarStatus"/>
                        </div>  
                        <div className="SideRight-Cadastro-Links">
                        <Link to="/Login" style={{textDecoration:'none', color: '#000'}}><p>Login</p></Link>
                            <hr className="BarStatus2"/>
                        </div> 
                    </div>   

                    <div style={{marginBottom: 25}}>   
                        <form  className="Box-Inpt-Cadastro" onSubmit={ExecuteCad}>
                            <input
                                className="Inpt-Cadastro" 
                                type="email"
                                placeholder="Email :"
                                value={email}
                                onChange={event => SetEmail(event.target.value)}
                            />
                            <input
                                className="Inpt-Cadastro" 
                                type="password"
                                placeholder="Senha :"
                                value={pwd}
                                onChange={event => Setpwd(event.target.value)}

                            />
                            <input
                                className="Inpt-Cadastro" 
                                type="password"
                                placeholder="Confirme sua senha :"
                                value={ReplyPwd}
                                onChange={event => SetReplyPwd(event.target.value)}                      
                            />

                            <p style={{color:'red'}}>{errorRply}</p> 

                            <div className="SendRead">
                            <div className="custom-checkbox">
                                <input type="checkbox" id="checkbox-1"/>
                                <label for="checkbox-1">Li e concordo com os termos</label>
                            </div>
                            </div>

                            <div className="Access-Btn">
                            <button className="btn-Cadastro" type='submit'>Acessar</button>
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
