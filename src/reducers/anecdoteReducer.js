import { createSlice } from "@reduxjs/toolkit";
//import { initializeConnect } from "react-redux/es/components/connect";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);
//console.log(initialState);

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const anecdote = action.payload;
      console.log("this is payload", action.payload);
      state.push({
        anecdote,
        id: getId(),
        votes: 0,
      });
    },
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
  },
});

export const { createAnecdote, voteof } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
