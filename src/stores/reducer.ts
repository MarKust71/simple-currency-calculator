import { combineReducers } from 'redux';

import currenciesReducer from './currenciesStore/currenciesReducer';
import historyReducer from './historyStore/historyReducer';

const reducer = combineReducers({
  currencies: currenciesReducer,
  history: historyReducer,
});

export default reducer;

export type TReducer = ReturnType<typeof reducer>;
