import { CurrenciesAction, CurrenciesState } from './currencies.types';
import { CurrenciesActionType } from './currenciesActionTypes';

const initialState: CurrenciesState = {
  currencies: {},
  currencyFrom: '',
};

const currenciesReducer = (state: CurrenciesState = initialState, action: CurrenciesAction): CurrenciesState => {
  switch (action.type) {
    case CurrenciesActionType.SET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload?.currencies,
      };

    case CurrenciesActionType.SET_CURRENCY_CODE_FROM:
      return {
        ...state,
        currencyFrom: action.payload?.currencyFrom,
      };

    default:
      return state;
  }
};

export default currenciesReducer;
