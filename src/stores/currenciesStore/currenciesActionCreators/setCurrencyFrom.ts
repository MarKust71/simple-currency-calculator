import { Dispatch } from 'redux';

import { CurrenciesAction, CurrenciesState } from '../currencies.types';
import { CurrenciesActionType } from '../currenciesActionTypes';

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
