import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdote";

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState: [],
  reducers: {
    //createAnecdote(state, action) {
    //   //const content = action.payload;
    //   //console.log("this is payload", action.payload);
    //   // state.push({
    //   //   content,
    //   //   // id: getId(),
    //   //   votes: 0,
    //   // });
    //return [...state, action.payload];
    //},
    voteof(state, action) {
      const id = action.payload;
      const anecdoteToLike = state.find((n) => n.id === id);
      const likedAnecdote = {
        ...anecdoteToLike,
        votes: anecdoteToLike.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : likedAnecdote
      );
    },

    appendAnecdote(state, action) {
      return [...state, action.payload];
    },

    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { voteof, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const notes = await anecdoteService.getAll();
    dispatch(setAnecdotes(notes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newNote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newNote));
  };
};
