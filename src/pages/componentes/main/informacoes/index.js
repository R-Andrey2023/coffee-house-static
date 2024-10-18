import React from "react";
import Imagem_parallax from "./ImagensParallax";
import  estilo from "../../../../styles/main-styles/sobre.module.css";


export default function Informacoes(){
    return(
        <section className="informacoes" id="info">
          <div className="limitar_secao">
           <div className={estilo.container_texto}>
             <h2>EXPERIMENTE O MELHOR CAFÉ DA CIDADE!</h2>
             <p>
              O café não é uma simples bebida que foi preparada por alguém. O café é
              momento e nós mostraremos isso. Frases como “Que tal tomarmos um café?”
              ou até então “Vamos fazer um café?” são demonstrações de que um dos
              momentos que mais reforçam os laços para com o próximo está finalmente
              por acontecer. Fraco ou forte? Com ou sem açúcar? Você deseja açúcar ou
              adoçante? Estas são frases que ouvimos em vários lugares. Em quase todos
              os locais onde há pessoas há também café. Parecemos intrínsecos ao café.
              Aqui na Manhattan serviremos para você com muito carinho o nosso querido
              e amado Amaro’s Coffe diretamente do nosso cafezal em Minas Gerais. Para
              todos nós, café é coisa séria e merece todo o cuidado.
            </p>
          </div>

          <Imagem_parallax frase = "Um bom café é motivo de alegria!" estilo = {estilo.imagem_paralax1}/>

          <div className ={estilo.container_texto}>
              <h2>O QUE É O CAFÉ MANHATTAN?</h2>
              <p>
                Segundo a Metodologia de Avaliação Sensorial da SCA (Specialty Coffee
                Association), usada no mundo todo, um café especial é todo aquele que
                atinge, no mínimo, 80 pontos na escala de pontuação da metodologia (que
                vai até 100). O Café Manhattan destaca-se nos atributos fragrância,
                corpo, harmonia, doçura e sabor, nesse caso, possuindo sabores e aromas
                que podem ser frutados, herbais, doces como caramelo e chocolate.
                Podemos fazer uma analogia com o vinho, pois o café Manhattan também
                pode ser apreciado por suas características sensoriais e não apenas pela
                cafeína. Através do excelente padrão de cultivo, cuidado pós-colheita e
                da torra, você poderá experimentar diferentes e deliciosos tipos de
                café.
              </p>
        
          </div>

          <Imagem_parallax frase = "A vida só começa depois do café!" estilo = {estilo.imagem_paralax2}/>

          <div className = {estilo.container_texto}>
              <h2>CONHEÇA O CAFÉ GOURMET MANHATTAN?</h2>
              <p>As características desse tipo do café gourmet da Manhattan são muito
                marcantes. O seu corpo vai depender da variedade do blend: quanto mais
                “pesado” ele for na boca, maior o corpo. Quanto menor a sua pesagem,
                menor o corpo. O nosso café gourmet é o mais bem avaliado no processo de
                produção, para que ele não venha com nenhum tipo de defeito. O aroma é
                bem perceptível e o consumidor consegue sentir nitidamente, sendo que
                ele pode variar entre 4 aromas: florado, cítrico, achocolatado, frutado.
                Essas variações são consequências dos grãos do tipo Arábica. Tudo isso
                vai depender da torra, quanto mais clara ela for, maior será a acidez.
              </p>
          
          </div>
        </div>

     </section>
    );
};