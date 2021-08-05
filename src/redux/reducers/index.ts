import { YourPokemons } from './../../components/YourPokemons/YourPokemons';
import { combineReducers } from 'redux';
import pokemonsReducer from './pokemonsReducer';

const rootReducer = combineReducers({
    pokemons: pokemonsReducer,
    yourPokemons: YourPokemons
});

export default rootReducer;