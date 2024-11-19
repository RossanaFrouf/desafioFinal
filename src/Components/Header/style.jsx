import styled from "styled-components";
import {Link} from "react-router-dom"

export const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
align-items: center;

`
export const StyleLink = styled(Link)`
text-decoration: none;
color: #1E3932;

&:hover{
    color: #14764e;

`

export const Ul = styled.ul`
display: flex;

width: 40vw;
justify-content: space-around;
list-style: none;

`

export const Li = styled.li`
font-family: "Poppins", sans-serif;
font-weight: 400;
font-size: 1.5rem;
`