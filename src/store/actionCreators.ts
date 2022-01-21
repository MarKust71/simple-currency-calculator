import * as actionTypes from './actionTypes';

export const addToHistory = (historyItem: IHistoryItem) => {
  const action: HistoryAction = {
    type: actionTypes.ADD_TO_HISTORY,
    historyItem,
  };

  return simulateHttpRequest(action);
};

export const removeFromHistory = (historyItem: IHistoryItem) => {
  const action: HistoryAction = {
    type: actionTypes.REMOVE_FROM_HISTORY,
    historyItem,
  };

  return simulateHttpRequest(action);
};

export const simulateHttpRequest = (action: HistoryAction) => {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
};
