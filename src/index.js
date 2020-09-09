import React from 'react';
import ReactDOM from 'react-dom'; 
import style from './index.css';
import CommentApp from './containers/app';
import {createStore} from 'redux';
import comments from './reducers/index';

const initialState = [
  {id: 1, name: 'egor', text: 'bla bla bla bla', time: '12:03'},
  {id: 2, name: 'inga', text: 'bla bla bla bla', time: '12:05'},
  {id: 3, name: 'milk', text: 'bla bla bla bla', time: '12:07'}
];

const store = createStore(comments, initialState)

ReactDOM.render(
  <CommentApp store = {store} />,
  document.querySelector('#app')
) 
