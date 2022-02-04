import React from "react";
import { Header } from './styled';
import logoPokemon from '../../images/logoPokemon.png';
import { Link } from 'react-router-dom';

const PokedexPage = () => {

        return(
            <div>
            <Header>
                <Link to={"/"}>
                <button>Voltar para lista de Pokémons</button>
                </Link>
                <h1>Minha Pokédex</h1>
                <img src={logoPokemon} width={150}/>
            </Header>
            </div>
    );
    
} 

export default PokedexPage;