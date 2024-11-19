import { Link } from "react-router-dom";
import styled from "styled-components";
import {HeaderStyle, StyleLink, Ul, Li} from "./style";

export default function Header() {
  return (
    <HeaderStyle>
      <img src="src\assets\images\logo.png" alt="logomarca" />
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
        </Ul>
      </nav>
    </HeaderStyle>
);
}