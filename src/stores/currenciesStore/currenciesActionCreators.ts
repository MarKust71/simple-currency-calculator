import { Dispatch } from 'redux';

import { CurrenciesAction, CurrenciesState, ICurrencies } from './currencies.types';
import { CurrenciesActionType } from './currenciesActionTypes';

export const setCurrencies = (currencies: ICurrencies) => {
  const action: CurrenciesAction = {
    type: CurrenciesActionType.SET_CURRENCIES,
    payload: { currencies },
  };

  return (dispatch: Dispatch<CurrenciesAction>) => dispatch(action);
};

export const setCurrencyFrom = (currencies: CurrenciesState) => {
  const action: CurrenciesAction = {
    type: CurrenciesActionType.SET_CURRENCY_CODE_FROM,
    payload: {
      ...currencies,
      currencyFrom: currencies.currencyFrom,
    },
  };

  return (dispatch: Dispatch<CurrenciesAction>) => dispatch(action);
};
