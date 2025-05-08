export interface Accounts {
  accounts: Account[];
}

export interface Account {
  alias: string;
  number: string;
  availableAmount: number;
  productType: string;
}