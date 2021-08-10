import React, { useEffect, useState } from 'react';

import { useHistory } from "react-router-dom";
import Header from '../../Components/Header'
import Logotype from '../../Assets/Img/logoProjeto3.png'
import axios from 'axios';



function CadSala() {
  let history = useHistory();
  
  const [Andar, setAndar] = useState();
  const [Nome, setNome] = useState('');
  const [Metragem, setMetragem] = useState();

  function ExecuteCadSala(Event){
    const TokenValor = localStorage.getItem('@jwt')

    Event.preventDefault();

        axios.post('http://localhost:5000/api/Login', {
            Andar: Andar,
            Nome : Nome,
            Metragem : Metragem
     
          }, {
              headers:{
                'Authorization': `Bearer  ${TokenValor}`
              }

          })
          .then(
                history.push('/Listagem')     
            )
            .catch(error =>{
                console.log(error)
            })
  }

  return (
    <body id="BodyCad"> 
    <Header />
    <main id="MainCad">
        <div class="box-Inside-CadSala">
            <div class="Group-Itens-Form">
                <div >
                    <h1 class="Size-H1-Cad">Cadastro Salas</h1>
                    <hr class="BarStatus3"/>
                    
                    <p class="Size-p-Form-cad">Todos os campos são de preenchimento obrigatório*</p>
                    <div class="Outside-form">
                        <form onSubmit={ExecuteCadSala}>                    
                              <input type="text" placeholder="Andar:" class="InptCad"
                                value={Andar}
                                onChange={Event => setAndar(Event.target.value)}
                              />

                            <div class="Box-Radios-Items">
                              <input type="text" placeholder="Nome:" class="InptCad2"
                                value={Nome}
                                onChange={Event => setNome(Event.target.value)}
                              />
                            </div>
                            <div class="box-finish-cad">
                                <input type="text" placeholder="Metragem da Sala:      Ex: m2" class="InptCad2"
                                value={Metragem}
                                onChange={Event => setMetragem(Event.target.value)}
                                />
                            </div>
                            <div class="Div-btn-cad">
                                <button class="BtnCadastrar" type='submit'>Cadastrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="Img-Div-Logo-cad">
                <img src={Logotype} alt="Logotipo do tipo do site"/>
            </div>
        </div>       
    </main>     
    </body>
  );
}





export default CadSala;
