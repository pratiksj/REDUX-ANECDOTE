import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import FilterAnecdote from "./components/FilterAnecdote";
const App = () => {
  return (
    <div>
      <Notification />
      <FilterAnecdote />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
