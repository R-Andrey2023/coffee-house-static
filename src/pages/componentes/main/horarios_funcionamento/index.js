import React from "react";
import estilos from "../../../../styles/main-styles/horarios-func.module.css";

export default function HorariosFuncionamento(){
    return(
        <section className={estilos.HorariosFuncionamento} id="horarios">
            <h2>HORÁRIOS DE FUNCIONAMENTO</h2>

             <ul className={estilos.lista}>
                <li>
                   <h3>SEGUNDA</h3>
                   <div></div>
                   <p><span>FECHADO</span></p>

              </li>
              <li> 
                  <h3>TERÇA</h3>
                  <div></div>
                  <p>09:00 - 22:00</p>
             </li>
              <li>
                  <h3>QUARTA</h3>
                  <div></div>
                  <p>09:00 - 22:00</p>
             </li>
              <li>
                  <h3>QUINTA</h3>
                  <div></div>
                  <p>09:00 - 22:00</p>
             </li>
             <li>
                  <h3>SEXTA</h3>
                  <div></div>
                  <p>09:00 - 22:00</p>
             </li>
             <li>
                  <h3>SÁBADO</h3>
                  <div></div>
                  <p>09:00 - 22:00</p>
             </li>
              <li>
                  <h3>DOMINGO</h3>
                  <div></div>
                  <p>12:00 - 22:00</p>
             </li>
         </ul>
    </section>
    );
};