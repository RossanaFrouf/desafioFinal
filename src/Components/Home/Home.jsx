import copoLaranja from "../../assets/images/copoLaranja.png";
import copoAmarelo from "../../assets/images/copoAmarelo.png";
import copoVermelho from "../../assets/images/copoVermelho.png";
import copoPequenoLaranja from "../../assets/images/copoPequenoLaranja.png";
import copoPequenoAmarelo from "../../assets/images/copoPequenoAmarelo.png";
import copoPequenoVermelho from "../../assets/images/copoPequenoVermelho.png";
import elipseVerde from "../../assets/images/elipseVerde.png";
import elipseAmarelo from "../../assets/images/elipseAmarelo.png";
import elipseVermelho from "../../assets/images/elipseVermelho.png";
import { useState } from "react";
import {MainStyle,  H2, Span, P, Button} from "./style";
import { use } from "react";



export default function Home() {

    const [color, setColor] = useState("#ffffff")
    const [imgUrl, setImgUrl] = useState() 
    const [imgCopo, setImgCopo] = useState() 
    const trocarImagem = () => {
        setColor, setImgCopo, setImgUrl(!copo)
    }

    return (
            <MainStyle>
                <section>
                    <H2>Mais que Café isso é <Span>Starbucks</Span></H2>

                    <P>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</P>

                    <Button>SAIBA MAIS</Button>
                </section>
                <div>

                <button onClick={  () => {setImgCopo ("https://raw.githubusercontent.com/mariaccarolina/starbucks/refs/heads/main/src/assets/laranja2x.png"); setColor("#037143"); setImgUrl("https://raw.githubusercontent.com/mariaccarolina/starbucks/refs/heads/main/src/assets/laranja.png")}}> </button>

                <button onClick={ () => {setImgCopo("https://raw.githubusercontent.com/mariaccarolina/starbugsNoite/refs/heads/main/src/assets/images/amarelo2x%201.png");  setColor("#DECD13"); setImgUrl("https://raw.githubusercontent.com/mariaccarolina/starbucks/refs/heads/main/src/assets/amarelo.png")}}> </button>

                <button onClick={  () => {setImgCopo("https://raw.githubusercontent.com/mariaccarolina/starbucks/refs/heads/main/src/assets/vermelho2x.png"); setColor("#97090C"); setImgUrl("https://raw.githubusercontent.com/mariaccarolina/starbugsNoite/refs/heads/main/src/assets/images/vermelho%201.png")}}> </button>
            
                
                <div style={{height: "100px", width: "100px", backgroundColor: color }}>


                </div>
                  <img src={imgUrl} alt="" />
                  <img src={imgCopo} alt=""/>
                </div>
               
            </MainStyle>
    );
}