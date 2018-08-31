import axios from "axios";

const fetchPosts = () => {
  return {
    type: "FETCH_POSTS",
    payload: axios(`https://jsonplaceholder.typicode.com/posts`);
  }
}

const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: axios.post(`https://jsonplaceholder.typicode.com/posts`, post);
  }
}

export {fetchPosts, addPost};