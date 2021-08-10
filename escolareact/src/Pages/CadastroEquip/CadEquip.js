import React, { useEffect, useState } from 'react';

import { useHistory } from "react-router-dom";


import Header from '../../Components/Header'
import '../../Assets/Css/Escola.css'
import LogoType from '../../Assets/Img/logoProjeto3.png'

function CadeEquip() {
  let history = useHistory();

  return (
    <body id="BodyCad">
      <Header />
      <main id="MainCad">
        <div className="box-Inside-CadEquip">
            <div className="Group-Itens-Form">

                <div>
                    <h1 className="Size-H1-Cad">Cadastro Equipamentos</h1>
                    <hr className="BarStatus3"/>
                    <p className="Size-p-Form-cad">Todos os campos são de preenchimento obrigatório*</p>
                    <div className="Outside-form">
                        <form>                    
                        <input type="text" placeholder="Marca:" className="InptCad"/>

                        <div className="Div-Radios">
                                <div className="Box-Radios-Items">
                                    <p>Tipo Equipamentos :</p>
                                </div>

                                <div className="Box-Radios-Items2">
                                    <input type="radio" id="Mobiliario" value="Mobiliario" name="equip" className="Label-Form"/>
                                    <label for="Mobiliario" className="Label-Form">Mobiliário</label>
                                    <input type="radio" id="Informatica" value="Informatica" name="equip" />
                                    <label for="Informatica" className="Label-Form">Informática</label>
                                    <input type="radio" id="Eletroeletronica" value="Eletroeletronica" name="equip"/>
                                    <label for="Eletroeletronica" className="Label-Form">Eletroeletrônica</label>
                                </div>
                            </div>

                            <div className="Div-txt-inpt">
                                <input type="text" placeholder="Nº Série" className="InptCad2"/>

                                <div className="Input-Box-Atv">
                                    <input type="radio" id="Inativo" value="Inativo" name="status" />
                                    <label for="Mobiliario" className="Txt-Radios">Ativo</label>
                                </div>

                                <div className="Input-Box-Atv">
                                    <input type="radio" id="Ativo" value="Ativo" name="status"  />
                                    <label for="Mobiliario" className="Txt-Radios">Inativo</label>
                                </div>
                            </div>
                            <div className="box-finish-cad">
                                <input type="text" placeholder="Nº Patrimônio" className="InptCad2"/>
                                <input type="text" placeholder="Descrição" className="InptCad3"/>
                            </div>
                                <div className="Div-btn-cad">
                                  <button className="BtnCadastrar">Cadastrar</button>
                                </div>
                        </form>

                    </div>
                </div>
            </div>




            <div className="Img-Div-Logo-cad">
                <img src={LogoType} alt="Logotipo do tipo do site"/>
            </div>
        </div>   
    </main>    
    
    </body>

  );
}





export default  CadeEquip;
