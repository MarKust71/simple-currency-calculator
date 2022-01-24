import { HistoryAction, HistoryState } from './history.types';
import { HistoryActionType } from './historyActionTypes';

const initialState: HistoryState = {
  history: [],
};

const historyReducer = (state: HistoryState = initialState, action: HistoryAction): HistoryState => {
  switch (action.type) {
    case HistoryActionType.ADD_HISTORY_ITEM:
      return {
        ...state,
        history: action.payload?.history || [],
      };

    default:
      return state;
  }
};

export default historyReducer;
