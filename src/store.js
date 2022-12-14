//import { createStore } from "redux";
//import React from "react";
import { configureStore } from "@reduxjs/toolkit";

import anecdoteReducer from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
//const store = createStore(anecdoteReducer);
const store = configureStore({
  reducer: {
    anecdote: anecdoteReducer,
    notification: notificationReducer,
  },
});

export default store;
