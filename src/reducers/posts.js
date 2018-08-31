let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...action.payload.data];
    case "ADD_POST":
      return [...action.payload.data, ...state];
    default:
      return state;
  }
};
