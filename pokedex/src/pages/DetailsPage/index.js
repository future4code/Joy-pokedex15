import React from "react";
import { Header } from './styled';
import logoPokemon from '../../images/logoPokemon.png';
import { Link } from 'react-router-dom';

const DetailsPage = () => {
    
    return(
        <div>
        <Header>
            <Link to={"/pokedex"}>
            <button>Ir para Pokédex</button>
            </Link>
            <img src={logoPokemon} width={150}/>
            <Link to={"/"}>
            <button>Voltar para lista de Pokémons</button>
            </Link>
        </Header>
        </div>
    );
    
} 

export default DetailsPage;