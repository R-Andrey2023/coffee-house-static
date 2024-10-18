import React from 'react';
import estilo from "../../../styles/rodape.module.css";


export default function Rodape(){
    return(
        <footer>
           <div className = {estilo.rodape}>
                <p>&copy; Manhattan - Coffee House - Todos os direitos reservados</p>
                <p>Desenvolvido por <span>Wilson Andrey</span></p>
                <a href="#banner"></a>
           </div>
      </footer>
    );
};

