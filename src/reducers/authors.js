let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_AUTHORS":
      return [...action.payload.data];
    default:
      return state;
  }
};
