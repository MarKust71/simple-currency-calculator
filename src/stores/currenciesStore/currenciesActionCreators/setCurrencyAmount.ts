import { Dispatch } from 'redux';

import { CurrenciesAction, CurrenciesState } from '../currencies.types';
import { CurrenciesActionType } from '../currenciesActionTypes';

export const setCurrencyAmount = (currencies: CurrenciesState) => {
  const action: CurrenciesAction = {
    type: CurrenciesActionType.SET_AMOUNT,
    payload: {
      ...currencies,
      amount: currencies.amount,
    },
  };

  return (dispatch: Dispatch<CurrenciesAction>) => dispatch(action);
};
