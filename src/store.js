import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import rootReducer from "./reducers";

export default initialState => {
  return createStore(
    rootReducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(logger, promise())
  );
};
