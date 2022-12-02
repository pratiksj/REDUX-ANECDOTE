//import { useSelector, useDispatch } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
const App = () => {
  // const anecdotes = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const orderedVote = anecdotes.sort((a, b) => b.votes - a.votes);

  // const vote = (id) => {
  //   dispatch(voteof(id));
  // };

  return (
    <div>
      <h1>Anecdotes</h1>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
