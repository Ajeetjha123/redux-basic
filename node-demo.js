const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENTBY2":
      return { counter: state.counter + 2 };

    case "DECREMENTBY2":
      return { counter: state.counter - 2 };

    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestStore = store.getState();
  console.log(latestStore);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "INCREMENTBY2" });

store.dispatch({ type: "DECREMENTBY2" });
