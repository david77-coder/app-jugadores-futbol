import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JugadorInterface } from '../_interfaces/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor(private http: HttpClient) { }

    obtener(){
      return this.http.get<JugadorInterface[]>('assets/data/jugadores.json')
    }
  
}
