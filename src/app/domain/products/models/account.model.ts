export interface Account {
  alias: string;
  accountNumber: string;
  image: Image;
  amountRD: number;
}

export interface Image {
  url: string;
  alt: string;
}