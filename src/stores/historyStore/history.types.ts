export interface IHistoryItem {
  id: string;
  date: string;
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  amount: number;
}

export type HistoryState = {
  history: IHistoryItem[];
};

export type HistoryAction = {
  type: string;
  historyItem: IHistoryItem;
};

export type HistoryDispatchType = (args: HistoryAction) => HistoryAction;
