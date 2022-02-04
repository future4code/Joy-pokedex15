import React from "react";
import { Header, Body, CardContainer, Card } from './styled';
import logoPokemon from '../../images/logoPokemon.png';
import { Link } from 'react-router-dom';


const HomePage = () => {

    return(
        <div>
        <Header>
            <Link to={"/pokedex"}>
            <button>Ver minha Pokédex</button>
            </Link>
            <h1>Lista de Pokémons</h1>
            <img src={logoPokemon} width={150}/>
        </Header>
        <Body>
            <CardContainer>
                <Card>
                </Card>
            </CardContainer>
        </Body>
        </div>
    );
    
} 

export default HomePage;