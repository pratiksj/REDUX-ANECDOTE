import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
//import anecdoteService from "../services/anecdote";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  // const newAnecdote = async (event) => {
  //   event.preventDefault();
  //   const content = event.target.anecdote.value;
  //   event.target.anecdote.value = "";
  //   const newAnecdote = await anecdoteService.createNew(content);
  //   dispatch(createAnecdote(newAnecdote));
  //   dispatch(setMessage(`${content} has added`));
  //   setTimeout(() => {
  //     dispatch(removeMessage());
  //   }, 3000);
  // };

  const newAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnecdote(content));
    dispatch(setNotification(`${content} has added`, 3));
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

export default AnecdoteForm;
