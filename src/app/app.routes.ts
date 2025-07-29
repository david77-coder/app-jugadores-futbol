import { Routes } from '@angular/router';
import { EquipoComponent } from './equipo/equipo.component';
import { JugadorComponent } from './jugador/jugador.component';
import { JuegoComponent } from './juego/juego.component';

export const routes: Routes = [
  { path: '', component: EquipoComponent },
  { path: 'jugador', component: JugadorComponent },
  { path: 'juego', component: JuegoComponent },
  { path: '**', component: EquipoComponent }
];
