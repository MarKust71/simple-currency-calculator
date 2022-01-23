export interface ICurrencies {
  [code: string]: string;
}

export type CurrenciesState = {
  currencies: ICurrencies | Record<string, never>;
};

export type CurrenciesAction = {
  type: string;
  currencies: ICurrencies;
};

export type CurrenciesDispatchType = (args: CurrenciesAction) => CurrenciesAction;
