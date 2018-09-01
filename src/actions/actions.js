import axios from "axios";

const fetchPosts = () => {
  return {
    type: "FETCH_POSTS",
    payload: axios(`https://jsonplaceholder.typicode.com/posts`)
  };
};

const addPost = post => {
  return {
    type: "ADD_POST",
    payload: axios.post(`https://jsonplaceholder.typicode.com/posts`, post)
  };
};

const fetchAuthors = () => {
  return {
    type: "FETCH_AUTHORS",
    payload: axios(`https://jsonplaceholder.typicode.com/users`)
  };
};

const fetchComments = () => {
  return {
    type: "FETCH_COMMENTS",
    payload: axios(`https://jsonplaceholder.typicode.com/comments`)
  };
};

const addComment = comment => {
  return {
    type: "ADD_COMMENT",
    payload: axios.post(
      `https://jsonplaceholder.typicode.com/comments`,
      comment
    )
  };
};

export { fetchPosts, addPost, fetchAuthors, fetchComments, addComment };
