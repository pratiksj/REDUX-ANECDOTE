import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  console.log("I am in getAll");
  const response = await axios.get(baseUrl);
  return response.data;
};
const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const update = async (id, likeAnecdote) => {
  console.log("I am in update");
  const response = await axios.put(`${baseUrl}/${id}`, likeAnecdote);
  return response.data;
};
// eslint-disable-next-line
export default { getAll, createNew, update };
