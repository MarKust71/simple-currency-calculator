import { CurrenciesAction, CurrenciesState } from './currencies.types';
import { CurrenciesActionType } from './currenciesActionTypes';

const initialState: CurrenciesState = {
  currencies: {},
  amount: '',
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

    case CurrenciesActionType.SET_AMOUNT:
      return {
        ...state,
        amount: action.payload?.amount,
      };

    default:
      return state;
  }
};

export default currenciesReducer;
