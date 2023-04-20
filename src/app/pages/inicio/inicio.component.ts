import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  name = 'Gonzalo Saucedo';
  loading_visible = false;

  visualizarLoading() {
    this.loading_visible = true;
    setTimeout(() => {
      this.loading_visible = false;
    }, 2000);



  }

}
