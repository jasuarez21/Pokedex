import actionTypes from "./actionTypes";
import axios from 'axios';

export function loadPokemons(){
    return async (dispatch: any) => {
        try {
            const data = await axios.get('https://pokeapi.co/api/v2/pokemon');
            dispatch({
                type: actionTypes.LOAD_POKEMONS,
                pokemons: data
            })
        } catch (error) {
            dispatch ({
                type: actionTypes.LOAD_ERROR
            })
        }
    }
}