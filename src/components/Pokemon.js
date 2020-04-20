import React, { useEffect, useState } from "react";
import './pokemon.css';

const Pokemon = ({ pokemonId }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
            .then(res => res.json())
            .then(json => {
                setPokemon(json);
            });

        return () => {
            // clean up - 고도의 상태나 생명 주기 관리가 필요할 때 사용
            // componentWillUnmount
        };
    }, [pokemonId]);

    useEffect(() => {
        console.log(pokemon);
    }, [pokemon]);

    if (!pokemon) {
        return <div>Now Loading…</div>;
    }

    return (

        <div
            id="pokemon-wrapper"
        >

            <div i
                d="pokemon-name" >
                <p>name</p>
                <p>{pokemon.name}</p>
            </div>
            <div id="pokemon-weight" >
                <p>weight</p>
                <p>{pokemon.weight}</p>
            </div>
            <div id="pokemon-height">
                <p>height</p>
                <p>{pokemon.height}</p>
            </div>
            <div id="pokemon-img" >
                <p>img</p>
                <p><img src={pokemon.sprites.front_default} alt="ditto" /></p>
            </div>
        </div>
    );
};

export default Pokemon;