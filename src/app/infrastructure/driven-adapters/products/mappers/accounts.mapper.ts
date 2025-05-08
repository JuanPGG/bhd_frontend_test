import { Account } from "src/app/domain/products/models/account.model";
import { Accounts } from "../models/accounts.model";

export function accountsMapper(data: Accounts): Account[] {
  return data.accounts.map((account) => ({
    alias: account.alias,
    accountNumber: account.number,
    amountRD: account.availableAmount,
    image: {
      url: "../../../../../assets/images/credit-card.png",
      alt: "Icono tarjeta de credito"
    }
  }))
}