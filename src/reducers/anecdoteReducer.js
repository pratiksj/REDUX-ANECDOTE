const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

// export const createNote = (content) => {
//   return {
//     type: "ADD",
//     data: {
//       content,
//       id: getId(),
//     },
//   };
// };

export const asObject = (anecdote) => {
  return {
    type: "ADD",
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};
console.log(asObject, "hellow there");

const initialState = anecdotesAtStart.map(asObject);
console.log(initialState);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      const addedNote = asObject(action.content);
      console.log(addedNote, "you");
      return [...state, addedNote];
    // case 'TOGGLE_IMPORTANCE': {
    //   const id = action.data.id
    //   const noteToChange = state.find(n => n.id === id)
    //   const changedNote = {
    //     ...noteToChange,
    //     important: !noteToChange.important
    //   }
    //   return state.map(note =>
    //     note.id !== id ? note : changedNote
    //   )
    //  }
    default:
      return state;
  }
};

// const reducer = (state = initialState, action) => {
//   console.log("state now: ", state);
//   console.log("action", action);
//   return state;
// };

export default reducer;
