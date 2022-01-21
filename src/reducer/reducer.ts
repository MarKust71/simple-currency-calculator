import { nanoid } from 'nanoid';

import * as actionTypes from '../action/actionTypes';

const initialState: HistoryState = {
  history: [],
};

const reducer = (state: HistoryState = initialState, action: HistoryAction): HistoryState => {
  switch (action.type) {
    case actionTypes.ADD_TO_HISTORY:
      const newHistoryItem: IHistoryItem = {
        id: nanoid(),
        date: action.historyItem.date,
        fromCurrency: action.historyItem.fromCurrency,
        toCurrency: action.historyItem.toCurrency,
        rate: action.historyItem.rate,
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

export default reducer;
