import { createStore } from 'redux';
import HistoryReducer from '../Reducer/HistoryReducer';

const store = createStore(HistoryReducer);

export default store;