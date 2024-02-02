import { useReducer, useState } from 'react';

let intialState = 0;

function reducerFn(state, Action) {
  //   if (Action.type === 'INC') {
  //     return state + Action.payload;
  //   } else if (Action.type == 'DEC') {
  //     return state - Action.payload;
  //   }

  switch (Action.type) {
    case 'INC':
      return state + Action.payload;

    case 'DEC':
      return state - Action.payload;

    default:
      return state;
  }
}

function CounterWReducer(params) {
  const [Data, xyz] = useReducer(reducerFn, intialState);

  return (
    <h1>
      Count : {Data}
      <button
        onClick={() => {
          xyz({ type: 'INC', payload: 1 });
        }}
      >
        INC
      </button>
      <button
        onClick={() => {
          xyz({ type: 'DEC', payload: 1 });
        }}
      >
        DEC
      </button>
    </h1>
  );
}
export default CounterWReducer;