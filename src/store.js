//import { createStore } from "redux";
//import React from "react";
import { configureStore } from "@reduxjs/toolkit";

import anecdoteReducer from "./reducers/anecdoteReducer";
//const store = createStore(anecdoteReducer);
const store = configureStore({
  reducer: {
    anecdote: anecdoteReducer,
  },
});

export default store;
