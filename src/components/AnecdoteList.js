import { useSelector, useDispatch } from "react-redux";
import { voteof } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const orderedVote = anecdotes.sort((a, b) => b.votes - a.votes);

  const vote = (id) => {
    dispatch(voteof(id));
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
