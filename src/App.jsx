import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Header } from './components/Header/Header';
import { ListOfPokemons } from './components/ListOfPokemons/ListOfPokemons';
import { YourPokemons } from './components/YourPokemons/YourPokemons';
import { DetailPokemon } from './components/DetailPokemon/DetailPokemon';
import configureStore from './redux/store/index'
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={ListOfPokemons} />
        <Route path="/YourPokemons" component={YourPokemons} />
        <Route path="/detail/:name" component={DetailPokemon} />
      </Switch>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
