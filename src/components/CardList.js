import React from 'react';
import Card from "./Card.js";

const CardList = (props) => {
    const {allPokemon} = props;
    return (
        allPokemon.map(pokemon => <Card
            id={pokemon.number}
            name={pokemon.name}
            description={pokemon.description}
            sprite={pokemon.sprite}></Card>
        )
    )
};

export default CardList;