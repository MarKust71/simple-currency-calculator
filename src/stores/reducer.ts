import { combineReducers } from 'redux';

import currenciesReducer from './currenciesStore/currenciesReducer';

const reducer = combineReducers({
  currencies: currenciesReducer,
});

export default reducer;

export type TReducer = ReturnType<typeof reducer>;
