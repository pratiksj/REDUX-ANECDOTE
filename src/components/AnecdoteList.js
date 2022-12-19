import { useSelector, useDispatch } from "react-redux";
import { voteof } from "../reducers/anecdoteReducer";
import { setMessage, removeMessage } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotesFromStore = useSelector((state) => state.anecdotes);
  //const anecdotes = anecdotesFromStore ? anecdotesFromStore : [];
  //console.log("hellow i am anecdote", anecdotes);
  //const filter = useSelector((state) => state.filter);
  //console.log("hellow i am filer", filter);

  const dispatch = useDispatch();

  // const filterAnecdote = anecdotes.filter((anecdote) =>
  //   anecdote.content?.includes(filter)
  // );

  // const filterAnecdote = anecdotes.filter((anecdote) =>
  //   anecdote.anecdote.includes(filter)
  // );

  //console.log("my laptop", filterAnecdote);

  const initlaOrderedVote = [...anecdotesFromStore].sort(
    (a, b) => b.votes - a.votes
  );
  //const orderedVote = [...filterAnecdote].sort((a, b) => b.votes - a.votes);

  // const showAnecdots =
  //   orderedVote.length !== 0 ? orderedVote : initlaOrderedVote;

  const vote = (id) => {
    const anecdote = anecdotesFromStore?.find((anecdote) => anecdote.id === id);

    dispatch(voteof(id));
    dispatch(setMessage(`you voted${anecdote.content}`));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 3000);
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {initlaOrderedVote.map((anecdote) => (
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
