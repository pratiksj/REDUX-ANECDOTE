import React from "react";
import ReactDOM from "react-dom/client";
import anecdoteService from "./services/anecdote";
//import { createStore } from 'redux'
import { Provider } from "react-redux";
import App from "./App";
import { appendAnecdote } from "./reducers/anecdoteReducer";
import store from "./store";

anecdoteService.getAll().then((notes) =>
  notes.forEach((note) => {
    store.dispatch(appendAnecdote(note));
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
