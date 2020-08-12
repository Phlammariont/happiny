import { createStore } from "redux";
import rootReducer from "./reducers";

const appStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export * from "./actions";
export default appStore;
