import { CreditCards } from "../models/cards.model";
import { Card } from "src/app/domain/products/models/card.model";

export function cardsMapper(data: CreditCards): Card[] {
  return data.cards.map((account) => ({
    alias: account.alias,
    accountNumber: account.number,
    amountRD: account.availableAmountRD,
    amountUS: account.availableAmountUS,
    image: {
      url: "../../../../../assets/images/credit-card.png",
      alt: "Icono tarjeta de credito"
    }
  }))
}