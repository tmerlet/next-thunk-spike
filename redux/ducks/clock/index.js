// ACTIONS

export const ADD = "ADD";
export const TICK = "TICK";

// ACTIONS CREATORS
export const serverRenderClock = isServer => {
  return { type: TICK, light: !isServer, ts: Date.now() };
};

export const startClock = () => dispatch => {
  return setInterval(
    () => dispatch({ type: TICK, light: true, ts: Date.now() }),
    800
  );
};

export const addCount = () => {
  return { type: ADD };
};

// REDUCERS
export const clockReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        lastUpdate: action.ts,
        light: !!action.light
      };
    case ADD:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};
