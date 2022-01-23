import { CurrenciesAction, CurrenciesState } from './currencies.types';
import * as actionTypes from './currenciesActionTypes';

const initialState: CurrenciesState = {
  currencies: {},
};

const currenciesReducer = (state: CurrenciesState = initialState, action: CurrenciesAction): CurrenciesState => {
  switch (action.type) {
    case actionTypes.SET_CURRENCIES:
      return {
        ...state,
        currencies: { pln: 'Polish złoty', usd: 'US dolar', eur: 'EC euro' },
      };
  }
  return state;
};

export default currenciesReducer;
