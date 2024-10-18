import React from 'react';
import Topo_pagina from '../topo';
import Banner_pagina from '../main/banner';
import Informacoes from '../main/informacoes';
import Endereço_contatos from '../main/endereço_contatos';
import HorariosFuncionamento from '../main/horarios_funcionamento';
import Rodape from '../rodape/Rodape';


export default function Pagina_completa(){
    return(
       <>
        <Topo_pagina/>

        <main>
          <Banner_pagina/>
          <Informacoes/>
          <Endereço_contatos/>
          <HorariosFuncionamento/>
        </main>

        <Rodape/>

       </>
    );
};