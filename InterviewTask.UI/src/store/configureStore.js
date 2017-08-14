import { createStore, applyMiddleware } from 'redux';
import rootReduces from '../reducers';
import ReduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import Thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReduces,
    initialState,
    applyMiddleware(Thunk, ReduxImmutableStateInvariant())
  );
}
