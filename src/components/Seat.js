import styled from "styled-components";

export default function Seat({numeroAssento, disponivel}){
    return(
        <SeatItem disponivel={disponivel}>{numeroAssento}</SeatItem>
    )
}



const SeatItem = styled.div`
    border-color: ${({disponivel}) => disponivel ? "#808F9D":"#F7C52B"}; // cores que mudam de acordo com disponibilidade
    background-color: ${({disponivel}) => disponivel ? "#C3CFD9":"#FBE192"};
    border-width: 1px;
    border-style: solid;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`