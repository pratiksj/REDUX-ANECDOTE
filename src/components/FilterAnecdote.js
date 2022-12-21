import { connect } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const FilterAnecdote = (props) => {
  const handleChange = (event) => {
    event.preventDefault();
    const filter = event.target.value;
    console.log("this is from me", filter);
    props.setFilter(filter);
  };
  const style = {
    marginBottom: 10,
  };
  return (
    <div style={style}>
      filter
      <input onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  setFilter,
};

// const ConnectedAnecdoteForm = connect(
//   mapDispatchToProps,
//   mapStateToProps///this step did not work
// )(AnecdoteForm);

// export default ConnectedAnecdoteForm;
export default connect(mapStateToProps, mapDispatchToProps)(FilterAnecdote);

//export default FilterAnecdote;
