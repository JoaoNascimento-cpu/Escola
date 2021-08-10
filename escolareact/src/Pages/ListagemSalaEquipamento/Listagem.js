import React, { useEffect, useState } from 'react';

import '../../Assets/Css/Listagem.css' 

import { useHistory } from "react-router-dom";



function Listagem() {
  let history = useHistory();

  return (
    <div>
        <header className="header">
            <h1>header aqui</h1>
        </header>
        <main className="body">
            <section className="container-listagem">
                <div className="listagem-sala">
                    <h2>Listagem Sala</h2>
                </div>
                <div className="listagem-equipamento">
                    <h2>Listagem Equipamento</h2>
                </div>
            </section>
        </main>
    </div>
  );
}





export default Listagem;