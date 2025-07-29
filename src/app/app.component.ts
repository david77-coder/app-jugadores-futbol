
import { Component }       from '@angular/core';
import { CommonModule }    from '@angular/common';
import { JugadoresService } from './_services/jugadores.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule }  from '@angular/material/button';

// Importa tu componente standalone

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink
],
  providers: [JugadoresService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miOtroProyecto';
}
