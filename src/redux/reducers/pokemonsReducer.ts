
import actionTypes from '../actions/actionTypes';

function pokemonsReducer(pokemons = [], action: any) {
  switch (action.type) {
    case actionTypes.LOAD_POKEMONS:
      return action.pokemons;

    default:
      return pokemons;
  }
}

export default pokemonsReducer;