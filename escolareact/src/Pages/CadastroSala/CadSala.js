import React, { useEffect, useState } from 'react';

import { useHistory } from "react-router-dom";
import Header from '../../Components/Header'
import Logotype from '../../Assets/Img/logoProjeto3.png'



function CadSala() {
  let history = useHistory();

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
                        <form>                    
                              <input type="text" placeholder="Andar:" class="InptCad"/>

                            <div class="Box-Radios-Items">
                              <input type="text" placeholder="Nome:" class="InptCad2"/>
                            </div>
                            <div class="box-finish-cad">
                                <input type="text" placeholder="Metragem da Sala:      Ex: 12m2" class="InptCad2"/>
                            </div>
                            <div class="Div-btn-cad">
                                <button class="BtnCadastrar">Cadastrar</button>
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
