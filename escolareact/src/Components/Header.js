import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import IconPerson from '../Assets/Img/IconPerfil.png'
import DoorLeave from '../Assets/Img/Sair.png'
import LogoType from '../Assets/Img/logoProjeto2.png'

import '../Assets/Css/Escola.css'



function Topo() {
  let history = useHistory();

  function removeToken(){
      localStorage.removeItem('@jwt')
      console.log('removeu')
  }

  return (

    <header id="HeaderCad">

        <div id="DivHeaderCad">
        <div class="divImgHeader">

            <Link to="/Listagem"><img src={LogoType} alt="Logo do site" className="Img-CadEquip"/></Link>
        </div>

            <ul>
                <li>
                    <Link to="/CadastroSala"> Cadastro Sala </Link>
                    <hr className="BarStatus2"/>
                </li>
                <li>
                   <Link to="/CadastroEquipamentos"> Cadastro Equipamentos </Link>
                    <hr  className="BarStatus2"/>
                </li> 
                <li>
                    <Link to="#"> <img src={IconPerson} className="IconHeader"/> </Link>
                </li>
                
                <li>
                    <Link to="/Login"> <img src={DoorLeave} className="IconHeader" onClick={() => removeToken()}/> </Link>
                </li>
            </ul>     
        </div>


    </header>

  );
}





export default  Topo;
