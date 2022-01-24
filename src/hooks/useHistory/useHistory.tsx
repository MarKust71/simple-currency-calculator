import { useDispatch, useSelector } from 'react-redux';

import { IHistoryItem } from 'stores/historyStore/history.types';
import { TReducer } from 'stores';
import { addHistoryItem } from 'stores/historyStore/historyActionCreators/addHistoryItem';

export const useHistory = () => {
  const dispatch = useDispatch();

  const { history } = useSelector((state: TReducer) => state.history);

  const addItem = (historyItem: IHistoryItem) => {
    const newHistory = [historyItem, ...history];

    dispatch(addHistoryItem({ history: [...newHistory] }));
  };

  return { addItem };
};
