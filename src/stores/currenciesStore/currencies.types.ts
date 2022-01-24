export interface ICurrencies {
  [code: string]: string;
}

export type CurrenciesState = {
  currencies?: ICurrencies;
  amount?: number | string;
  currencyFrom?: string;
  currencyTo?: string;
};

export type CurrenciesAction = {
  type: string;
  payload?: CurrenciesState;
};
