import React, { useEffect, useState } from 'react';


import { useHistory } from "react-router-dom";
import Header from '../../Components/Header'
import axios from 'axios';


function Listagem() {

    const [Lista, SetListar] = useState();

    let history = useHistory();

  return (
    <div>
        <Header />
        <main className="body">
            <section className="container-listagem">                     
                       
                                <div className="listagem-sala">
                                    <h2>Listagem Sala</h2>
                                    <p>andar</p>
                                    <p>nome</p>
                                    <p>metragemSala</p>
                                </div>  

                                <div className="listagem-sala">
                                    <h2>Listagem Equipamento</h2>
                                    <p>Numero serie</p>
                                    <p>Descricao</p>
                                    <p>Status equipamentos</p>
                                </div>                           
            </section>
        </main>
    </div>
  );
}





export default Listagem;