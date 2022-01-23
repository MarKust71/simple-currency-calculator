import { CurrenciesAction, CurrenciesState } from './currencies.types';
import { CurrenciesActionType } from './currenciesActionTypes';

const initialState: CurrenciesState = {
  currencies: {},
};

const currenciesReducer = (state: CurrenciesState = initialState, action: CurrenciesAction): CurrenciesState => {
  switch (action.type) {
    case CurrenciesActionType.SET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };

    default:
      return state;
  }
};

export default currenciesReducer;
