import React from 'react';
import estilo from "../../../styles/topo.module.css";

export default function Topo_pagina(){
    return(
      <header className="cabecalho">
        <div className={estilo.parent_header}>
          <img src="assets/logo.png"/>
          <div className={estilo.menu}>
             <a href="#info">INFORMAÇÕES</a>
             <a href="#contatos">CONTATOS</a>
             <a href="#horarios">HORÁRIOS</a>
          </div>

        </div>
     </header>
    );
};