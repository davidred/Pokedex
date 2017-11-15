import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// Comment out later
import * as ApiUtil from './util/api_util';
import { receiveAllPokemon } from './actions/pokemon_actions';
window.apiUtil = ApiUtil;
window.receiveAllPokemon = receiveAllPokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
