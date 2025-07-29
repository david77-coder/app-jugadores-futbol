import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPorLetra'
})
export class FiltroPorLetraPipe implements PipeTransform {
transform(value: any[], letra: string): any[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((v, i) => {
      v.originalIndex = i; // añadimos índice directamente al objeto original
      return v;
    })
    .filter(v => !letra || v.nombre?.toLowerCase().startsWith(letra.toLowerCase()));
}
}
