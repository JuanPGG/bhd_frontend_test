export interface CreditCards {
  cards: CreditCard[];
}

export interface CreditCard {
  alias: string;
  number: string;
  availableAmountRD: number;
  availableAmountUS: number;
  isInternational: boolean;
  productType: string;
}