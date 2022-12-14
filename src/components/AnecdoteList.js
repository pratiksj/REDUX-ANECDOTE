import { useSelector, useDispatch } from "react-redux";
import { voteof } from "../reducers/anecdoteReducer";
import Notification from "./Notification";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdote);
  const dispatch = useDispatch();

  const orderedVote = [...anecdotes].sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    dispatch(voteof(id));
  };
  return (
    <div>
      <Notification />
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
