import axios from "axios";

const fetchAuthors = () => {
  return {
    type: "FETCH_AUTHORS",
    payload: axios(`https://jsonplaceholder.typicode.com/users`)
  };
};

export fetchAuthors;