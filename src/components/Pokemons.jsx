import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
/**+-"useDisptach" sirve para consumir las Actions de "pokeDucks" y "useSelector" para acceder al State Inicial(dataInicial) también de "pokeDucks".*/

import { getPokemonsAction, nextPokemonAction } from '../redux/pokeDucks';

const Pokemons = () => {
    const dispatch = useDispatch();

    const pokemons = useSelector((store) => store.pokemons.array);

    return (
        <div>
            Pokemons List
            <button onClick={() => dispatch(getPokemonsAction())}>
                Get Pokemons
            </button>
            <button onClick={() => dispatch(nextPokemonAction())}>
                Next Pokemons
            </button>
            <ul>
                {pokemons.map((item) => (
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Pokemons;
