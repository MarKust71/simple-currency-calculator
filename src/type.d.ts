interface IHistoryItem {
  id: string;
  date: string;
  fromCurrency: string;
  toCurrency: string;
  rate: number;
}
type HistoryState = {
  history: IHistoryItem[];
};

type HistoryAction = {
  type: string;
  historyItem: IHistoryItem;
};

type DispatchType = (args: HistoryAction) => HistoryAction;
