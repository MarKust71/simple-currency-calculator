import { TCurrencies } from '../../hooks/useCurrencies/useCurrencies.types';

export type CurrencySelectItemsListProps = {
  currencies: TCurrencies | Record<string, never>;
};
