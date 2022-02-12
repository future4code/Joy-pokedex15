import styled from "styled-components";

export const CardList = styled.div`
    height: 35vh;
    width: 250px;
    margin: 10px;
    display: grid;
    grid-template-rows: 84% 10%;
    margin-bottom: 18px;
    box-shadow: 2px 2px 2px 2px rgba(50, 50, 50, 0.77);
` 
export const Botoes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
`

export const ImgContainer = styled.div`
    background: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
` 

export const Img = styled.img`
    height: 60%;
`

export const ContainerLista = styled.div`
    width: 90vw;
    height: 92vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px 46px;
    
`

export const Header = styled.div`
    height: 14vh;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
`
export const BotaoHeader = styled.button`
    position: absolute;
    left: 76px;
    cursor: pointer;
    background-color: white;
    border-radius: 7px;
    height: 30px;
`