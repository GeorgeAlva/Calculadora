import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeros-ba',
  templateUrl: './numeros-ba.component.html',
  styleUrls: ['./numeros-ba.component.css']
})
export class NumerosBAComponent implements OnInit {
  @Input() numeros: number[];
  @Input() valores: string[];
  @Output() numeroSeleccionado: EventEmitter<number>;
  @Output() valorSeleccionado: EventEmitter<string>;

  constructor() {
    this.numeroSeleccionado = new EventEmitter();
    this.valorSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  numeroPresionado( num: number ) {
    this.numeroSeleccionado.emit(num);
  }

  valorPresionado( val: string ) {
    this.valorSeleccionado.emit(val);
  }

}
