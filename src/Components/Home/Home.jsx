import {MainStyle,  H2, Span, P, Button} from "./style";

export default function Home() {
    return (
            <MainStyle>
                <section>
                    <H2>Mais que Café isso é <Span>Starbucks</Span></H2>

                    <P>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</P>

                    <Button>SAIBA MAIS</Button>
                </section>
                <div>
                    <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja.png?raw=true" alt="copo laranja pequeno" />
                    <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/vermelho.png?raw=true" alt="copo vermelho pequeno" />
                    <img src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/amarelo.png?raw=true" alt="copo amarelo pequeno" />
                </div>
                <section>
                <img
                    src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/laranja2x.png?raw=true"
                    alt="Copo com bebida laranja"/>
                <img
                    src="https://github.com/mariaccarolina/desafioSurpresa/blob/main/src/assets/images/Ellipse%201.png?raw=true"
                    alt="Elipse verde"/>
                </section>
            </MainStyle>
    );
}