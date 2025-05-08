import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currencyType: string): string {
    if (value == null) return '';
    
    // Aseguramos que el número siempre tiene dos decimales (si es entero, agregamos .00)
    
    let formattedValue = value.toFixed(2);
    let amount = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    const formatAmount = amount.split('.');

    return `<span class="card__balance--prefix">${currencyType}$</span><span class="card__balance--value">${formatAmount[0]}</span><span class="card__balance--decimal">.${formatAmount[1]}</span>`;
  }

}