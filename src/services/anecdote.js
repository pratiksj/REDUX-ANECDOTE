import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  console.log("I am in getAll");
  const response = await axios.get(baseUrl);
  return response.data;
};
// eslint-disable-next-line
export default { getAll };
