//import { createStore } from "redux";
//import React from "react";
import { configureStore } from "@reduxjs/toolkit";
//import anecdoteService from "./services/anecdote";

//import anecdoteReducer, { appendAnecdote } from "./reducers/anecdoteReducer";
import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";
//import anecdote from "./services/anecdote";
//const store = createStore(anecdoteReducer);
const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer,
  },
});

// anecdoteService.getAll().then((anecdotes) =>
//   anecdotes.forEach((anecdote) => {
//     store.dispatch(appendAnecdote(anecdote));
//   })
// );

export default store;
