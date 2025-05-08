export interface Card {
  alias: string;
  accountNumber: string;
  image: Image;
  amountRD: number;
  amountUS: number;
}

export interface Image {
  url: string;
  alt: string;
}