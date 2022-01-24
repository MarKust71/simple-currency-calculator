export interface IHistoryItem {
  date: string;
  currencyCodeFrom: string;
  currencyCodeTo: string;
  currencyValueFrom: string;
  currencyValueTo: string;
}

export type HistoryState = {
  history: IHistoryItem[];
};

export type HistoryAction = {
  type: string;
  payload?: HistoryState;
};
