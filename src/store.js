//import { createStore } from "redux";
//import React from "react";
import { configureStore } from "@reduxjs/toolkit";

import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";
//const store = createStore(anecdoteReducer);
const store = configureStore({
  reducer: {
    anecdote: anecdoteReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
});

export default store;
