import { Dispatch } from 'redux';

import { CurrenciesAction, CurrenciesState } from '../currencies.types';
import { CurrenciesActionType } from '../currenciesActionTypes';

export const setCurrencyTo = (currencies: CurrenciesState) => {
  const action: CurrenciesAction = {
    type: CurrenciesActionType.SET_CURRENCY_CODE_TO,
    payload: {
      ...currencies,
      currencyTo: currencies.currencyTo,
    },
  };

  return (dispatch: Dispatch<CurrenciesAction>) => dispatch(action);
};
