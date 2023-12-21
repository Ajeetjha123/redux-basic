const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };

    case "DECREMENT":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

const store = redux.createStore(counterReducer);

const counterSuscriber = () => {
  const latestStore = store.getState();
  console.log(latestStore);
};

store.subscribe(counterSuscriber);

for (let i = 0; i < 5; i++) {
  store.dispatch({ type: "DECREMENT" });
}
