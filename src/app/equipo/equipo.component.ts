import { JugadoresService } from './../_services/jugadores.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { JugadorComponent } from '../jugador/jugador.component';
import { JugadorInterface } from '../_interfaces/jugador.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { FiltroPorLetraPipe } from '../_pipes/filtro-por-letra.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { error } from 'console';
@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [
    JugadorComponent,
    FiltroPorLetraPipe,
    CommonModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    
    HttpClientModule
  
  ],
  providers:[JugadoresService],
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss'],
})
export class EquipoComponent implements OnInit {
  nombre = 'Barcelona';
  jugadores: JugadorInterface[] = [];
  presupuesto = 18000000;
  equipo: string = 'Piratas';
  aficionados: number = 10.123456789;
  actualizacion = new Date();
  efectividad: number = 10;
  spin:boolean = false;
  busqueda = '';

  estatus: boolean = false;
  indiceVisible: number | null = null;
  JugadoresService: any;

  constructor(private http: HttpClient, private jugadoresService: JugadoresService) {

  }


  obtenerJugadores() { 
    this.spin = true
      this.jugadoresService.obtener()
      .subscribe(data => {    
        this.jugadores = data;
        this.spin = false
        console.log("los arryass: ", this.jugadores);
      },error => {
        this.spin = false
        console.log(error.status)
      } );
   
    return this.jugadores;
  }

  ngOnInit(): void {
       this.obtenerJugadores()

  }
actualizarEstado(index: number) {
  this.jugadores[index].estado = !this.jugadores[index].estado;
}

  activarJugador(indice: number) {
    this.jugadores[indice].estado = !this.jugadores[indice].estado;
    this.toggleVisibilidad(indice);
  }
  toggleVisibilidad(indice: number) {
    debugger;
    if (this.indiceVisible === indice) {
      this.indiceVisible = null;
      // Oculta el jugador si ya está visible
    } else {
      this.indiceVisible = indice; // Muestra el jugador si no está visible
    }
  }
}
