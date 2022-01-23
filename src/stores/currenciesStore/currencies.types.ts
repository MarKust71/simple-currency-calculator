export interface ICurrencies {
  [code: string]: string;
}

export type CurrenciesState = {
  currencies?: ICurrencies;
  currencyFrom?: string;
};

export type CurrenciesAction = {
  type: string;
  payload?: CurrenciesState;
};
