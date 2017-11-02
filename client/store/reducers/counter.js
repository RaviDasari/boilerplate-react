import * as R from 'ramda';
import update from 'immutability-helper';
import { INCREMENT, DECREMENT } from '../actions/counter';

export default function counter(state = {
  value: 0,
}, action) {
  switch (action.type) {
    case INCREMENT:
      return update(state, {
        value: { $set: R.inc(state.value) },
      });
    case DECREMENT:
      return update(state, {
        value: { $set: R.dec(state.value) },
      });
    default:
      return state;
  }
}
