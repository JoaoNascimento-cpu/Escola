import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import IconPerson from '../Assets/Img/IconPerfil.png'
import DoorLeave from '../Assets/Img/Sair.png'
import LogoType from '../Assets/Img/logoProjeto2.png'

import '../Assets/Css/Escola.css'



function Topo() {
  let history = useHistory();

  return (

    <header id="HeaderCad">

        <div id="DivHeaderCad">
        <div class="divImgHeader">

            <a href="#"><img src={LogoType} alt="Logo do site" className="Img-CadEquip"/></a>
        </div>

            <ul>
                <li>
                    <a href="#"> Cadastro Sala </a>
                    <hr className="BarStatus"/>
                </li>
                <li>
                   <a href="#"> Cadastro Equipamentos </a>
                    <hr  className="BarStatus2"/>
                </li> 
                <li>
                    <a href="#"> <img src={IconPerson} className="IconHeader"/> </a>
                </li>
                
                <li>
                    <a href="#"> <img src={DoorLeave} className="IconHeader"/> </a>
                </li>
            </ul>     
        </div>


    </header>

  );
}





export default  Topo;
