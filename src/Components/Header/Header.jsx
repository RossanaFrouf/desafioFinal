
import {HeaderStyle, StyleLink, Ul, Li} from "./style";

export default function Header() {
  return (
    <HeaderStyle>
      <img src="https://github.com/mariaccarolina/starbucks/blob/main/src/assets/logo.png?raw=true" alt="logomarca" />
      <nav>
        <Ul>
                <Li>
                    <StyleLink to="/">Home</StyleLink>
                </Li>
                <Li>
                    <StyleLink to="/novidades">Novidades</StyleLink>
                </Li>
                <Li>
                    <StyleLink to="/sobre">Sobre</StyleLink>
                </Li>
                <Li>
                    <StyleLink to="/contato">Contato</StyleLink>
                </Li>
        </Ul>
      </nav>
    </HeaderStyle>
);
}