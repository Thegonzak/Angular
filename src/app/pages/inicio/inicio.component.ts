import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  name = 'Gonzalo Saucedo';
  loading_visible = false;

  constructor(private ruta: Router) {//Para navegar sobre rutas creamos un constructor y colocamos un parametro de tipo Router

  }

  visualizarLoading() {
    this.loading_visible = true;
    setTimeout(() => {
      this.loading_visible = false;
    }, 2000);
  }

  irPaginaTabla() {
    this.ruta.navigate(['tabla']);//Se lo llama mediante el metodo navigate y colocamos el nombre de la pagina.

  }

}
