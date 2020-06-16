import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  resultado = 0;
  numerosSeleccionados: any[] = [];
  numeros = [1, 2, 3, 4, 5, 6];
  valores = ['Borrar', 'X'];

  mostrarNumero( num: number ) {
    this.numerosSeleccionados.push(num);
  }

}
