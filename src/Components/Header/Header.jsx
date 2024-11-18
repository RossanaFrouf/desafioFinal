import styled from "styled-components";
import { Link } from "react-router-dom";
import {HeaderStyle, StyleLink, Ul, Li} from "./style";

export default function Header() {
  return (
    <header>
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
    </header>
);
}