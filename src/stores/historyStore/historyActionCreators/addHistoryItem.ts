import { Dispatch } from 'redux';

import { HistoryAction, HistoryState } from '../history.types';
import { HistoryActionType } from '../historyActionTypes';

export const addHistoryItem = (history: HistoryState) => {
  const action: HistoryAction = {
    type: HistoryActionType.ADD_HISTORY_ITEM,
    payload: history,
  };

  return (dispatch: Dispatch<HistoryAction>) => dispatch(action);
};
