import React from "react";
import estilo from "../../../../styles/main-styles/banner.module.css";

export default function Banner_pagina(){
    return(
      <section className = "secao_banner" id="banner">
        <div className={estilo.banner}>
           <h1>MANHATTAN - COFFEE HOUSE</h1>
        </div>
     </section>
    );
};