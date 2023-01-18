import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "spend") {
    return { money: state.money - 10 };
  }
  if (action.type === "recieve") {
    return { money: state.money + 10 };
  }
};

const Wallet = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>
        wallet:<strong>{state.money}</strong>
      </h1>
      <div>
        <button onClick={() => dispatch({ type: "spend" })}>spend</button>
        <button onClick={() => dispatch({ type: "recieve" })}>recieve</button>
      </div>
    </div>
  );
};

export default Wallet;
