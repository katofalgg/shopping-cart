import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, composeWithDevTools());
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export default store;
