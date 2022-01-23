import { nanoid } from 'nanoid';

import * as actionTypes from './historyActionTypes';
import { HistoryAction, HistoryState, IHistoryItem } from './history.types';

const initialState: HistoryState = {
  history: [
    {
      id: 'jhjhjhj',
      date: new Date().toISOString(),
      rate: 4.5432,
      fromCurrency: 'eur',
      toCurrency: 'pln',
      amount: 123.45,
    },
  ],
};

const historyReducer = (state: HistoryState = initialState, action: HistoryAction): HistoryState => {
  switch (action.type) {
    case actionTypes.ADD_TO_HISTORY:
      const newHistoryItem: IHistoryItem = {
        id: nanoid(),
        date: action.historyItem.date,
        fromCurrency: action.historyItem.fromCurrency,
        toCurrency: action.historyItem.toCurrency,
        rate: action.historyItem.rate,
        amount: action.historyItem.amount,
      };
      return {
        ...state,
        history: state.history.concat(newHistoryItem),
      };

    case actionTypes.REMOVE_FROM_HISTORY:
      const updatedHistoryItem: IHistoryItem[] = state.history.filter(
        (historyItem) => historyItem.id !== action.historyItem.id,
      );
      return {
        ...state,
        history: updatedHistoryItem,
      };
  }
  return state;
};

export default historyReducer;
