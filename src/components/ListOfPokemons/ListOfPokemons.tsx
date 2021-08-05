import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { loadPokemons } from '../../redux/actions/actionCreators';

export const ListOfPokemons = () => {
    const pokemons = useSelector((store:any) => store.pokemons);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadPokemons())
    }, [])
    console.log(pokemons.data);
    return (
        <>
            <h1>Pokemons List</h1>      
        {
            pokemons?.data?.results.map((pokemon: any) => <a href={`/detail/${pokemon.name}`}>{pokemon.name}</a>)
        }
        </>
    )
}
