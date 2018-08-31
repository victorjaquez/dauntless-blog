let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return [...action.payload.data];
    case "ADD_COMMENT":
      return [...action.payload.data, ...state];
    default:
      return state;
  }
};
