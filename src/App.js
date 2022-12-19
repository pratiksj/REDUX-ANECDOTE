import React from "react";
import { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import FilterAnecdote from "./components/FilterAnecdote";
//import anecdoteService from "./services/anecdote";
import { initializeAnecdote } from "./reducers/anecdoteReducer";
//import { appendAnecdote } from "./reducers/anecdoteReducer";
import { useDispatch } from "react-redux";

const App = () => {
  console.log("this is useEffect");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   anecdoteService
  //     .getAll()
  //     .then((anecdote) => dispatch(setAnecdotes(anecdote)));
  // }, [dispatch]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeAnecdote());
  }, [dispatch]);

  return (
    <div>
      <Notification />
      <FilterAnecdote />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
