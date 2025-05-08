import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastFourDigits'
})
export class LastFourDigitsPipe implements PipeTransform {

  transform(value: any): string {
    // Verificar que el valor es un número
    if (typeof value !== 'number' && typeof value !== 'string') {
      return ''; // Si no es un número o cadena, retornamos vacío
    }

    // Convertir el valor a cadena en caso de que sea número
    const strValue = value.toString();

    // Si la longitud del número es menor o igual a 4, mostramos el número completo
    if (strValue.length <= 4) {
      return strValue;
    }

    // De lo contrario, mostramos solo los últimos 4 dígitos
    return strValue.slice(-4);
  }
}
