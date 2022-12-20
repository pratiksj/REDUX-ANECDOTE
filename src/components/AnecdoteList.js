import { useSelector, useDispatch } from "react-redux";
import { increaseLike } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotesFromStore = useSelector((state) => state.anecdotes);
  //const anecdotes = anecdotesFromStore ? anecdotesFromStore : [];
  //console.log("hellow i am anecdote", anecdotes);
  const filter = useSelector((state) => state.filter);
  console.log("hellow i am", anecdotesFromStore);

  const dispatch = useDispatch();

  // const filterAnecdote = anecdotes.filter((anecdote) =>
  //   anecdote.content?.includes(filter)
  // );

  const filterAnecdote = anecdotesFromStore.filter((anecdote) =>
    anecdote.content.includes(filter)
  );

  const initlaOrderedVote = [...anecdotesFromStore].sort(
    (a, b) => b.votes - a.votes
  );
  const orderedVote = [...filterAnecdote].sort((a, b) => b.votes - a.votes);

  const showAnecdots =
    orderedVote.length !== 0 ? orderedVote : initlaOrderedVote;

  const vote = (id) => {
    const anecdote = anecdotesFromStore.find((anecdote) => anecdote.id === id);
    dispatch(increaseLike(id));

    dispatch(setNotification(`you voted${anecdote.content}`, 3));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {showAnecdots.map((anecdote) => (
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
