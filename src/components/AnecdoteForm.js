import { useDispatch } from "react-redux";
import { asObject } from "../reducers/anecdoteReducer";
import { setMessage, removeMessage } from "../reducers/notificationReducer";
//import Notification from "./Notification";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const newAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(asObject(content));
    dispatch(setMessage(`${content} has added`));
    setTimeout(() => {
      dispatch(removeMessage());
    }, 3000);
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
