import { Dispatch } from 'redux';

import { CurrenciesAction, ICurrencies } from './currencies.types';
import { CurrenciesActionType } from './currenciesActionTypes';

export const setCurrencies = (currencies: ICurrencies) => {
  const action: CurrenciesAction = {
    type: CurrenciesActionType.SET_CURRENCIES,
    payload: { currencies },
  };

  return (dispatch: Dispatch<CurrenciesAction>) => dispatch(action);
};
