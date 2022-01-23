export interface ICurrencies {
  [code: string]: string;
}

export type CurrenciesState = {
  currencies?: ICurrencies;
};

export type CurrenciesAction = {
  type: string;
  payload?: ICurrencies;
};
