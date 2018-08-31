import axios from "axios";

const fetchComments = () => {
  return {
    type: "FETCH_COMMENTS",
    payload: axios(`https://jsonplaceholder.typicode.com/comments`);
  }
}

const addComment = (comment) => {
  return {
    type: "ADD_COMMENT",
    payload: axios.post(`https://jsonplaceholder.typicode.com/comments`, comment);
  }
}

export { fetchComments, addComment};