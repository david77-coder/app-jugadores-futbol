import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JugadorInterface } from '../_interfaces/jugador.interface';

@Component({
  selector: 'app-jugador',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './jugador.component.html',
})
export class JugadorComponent {
  @Input('jugador')
  jugador!: JugadorInterface;

  @Input() nombreEquipo!: number;

  @Output('onActivate') estado: EventEmitter<number> =
    new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  activarJugador() {
    debugger
      this.estado.emit(this.jugador.originalIndex);
  }
}
