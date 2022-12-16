import { useSelector, useDispatch } from "react-redux";
import { voteof } from "../reducers/anecdoteReducer";
//import Notification from "./Notification";
import { setMessage, removeMessage } from "../reducers/notificationReducer";
//import FilterAnecdote from "./FilterAnecdote";
//import { setFilter } from "../reducers/filterReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const filterAnecdote = anecdotes.filter((anecdote) =>
    anecdote.content.includes(filter)
  );

  //const orderedVote = [...anecdotes].sort((a, b) => b.votes - a.votes);
  const orderedVote = [...filterAnecdote].sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    console.log(anecdote.content);
    dispatch(voteof(id));
    dispatch(setMessage(`you voted${anecdote.content}`));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 3000);
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {orderedVote.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
