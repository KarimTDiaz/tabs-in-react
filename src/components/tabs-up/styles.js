import styled from "styled-components";

const Container = styled.div`
   width: 360px;
    height: 150px;
    border: 2px solid black;
    padding-top: 1rem;

`
const List = styled.ul`
    display: flex;
`

const Tab = styled.div`
width: 120px;
height: 75px;
border: 2px solid black;
background-color: ${({ isActive }) => isActive ? 'blue':'transparent'};
`

export {Container, List, Tab}