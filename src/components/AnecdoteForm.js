import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const newAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.createAnecdote(content);
    props.setNotification(`${content} has added`, 3);
  };

  return (
    <div>
      <h2>create new</h2>

      <form onSubmit={newAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
};

// const ConnectedAnecdoteForm = connect(
//   mapDispatchToProps,
//   mapStateToProps///this step did not work
// )(AnecdoteForm);

// export default ConnectedAnecdoteForm;
export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm);
