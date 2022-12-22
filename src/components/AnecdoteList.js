import { connect } from "react-redux";
import { increaseLike } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = (props) => {
  const filterAnecdote = props.anecdotes.filter((anecdote) =>
    anecdote.content.includes(props.filter)
  );

  const initlaOrderedVote = [...props.anecdotes].sort(
    (a, b) => b.votes - a.votes
  );
  const orderedVote = [...filterAnecdote].sort((a, b) => b.votes - a.votes);

  const showAnecdots =
    orderedVote.length !== 0 ? orderedVote : initlaOrderedVote;

  const vote = (id) => {
    const anecdote = props.anecdotes.find((anecdote) => anecdote.id === id);
    props.increaseLike(id);

    props.setNotification(`you voted${anecdote.content}`, 3);
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  increaseLike,
  setNotification,
};

const ConnectedAnecdote = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);

export default ConnectedAnecdote;
