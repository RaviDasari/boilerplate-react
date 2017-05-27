import R from 'ramda';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Actions
export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

// Reducers
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return R.add(state, 1);
    case DECREMENT:
      return R.subtract(state, 1);
    default:
      return state;
  }
}
