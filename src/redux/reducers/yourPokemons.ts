import actionTypes from '../actions/actionTypes';

function yourPokemons(pokemons = [], action: any) {
  switch (action.type) {
    case actionTypes.LOAD_POKEMONS:
      return action.pokemons;

    default:
      return pokemons;
  }
}

export default yourPokemons;