import { CurrenciesAction, CurrenciesDispatchType, ICurrencies } from './currencies.types';
import * as actionTypes from './currenciesActionTypes';

export const setCurrencies = (currencies: ICurrencies) => {
  const action: CurrenciesAction = {
    type: actionTypes.SET_CURRENCIES,
    currencies,
  };

  return (dispatch: CurrenciesDispatchType) => dispatch(action);
};
