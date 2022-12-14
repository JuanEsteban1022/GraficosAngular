import { Component } from '@angular/core';

interface menuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {

  menu: menuItem[] = [
    { ruta: '/graficas/barra', texto: 'Barras' },
    { ruta: '/graficas/barra-doble', texto: 'Barras Dobles' },
    { ruta: '/graficas/dona', texto: 'Donas' },
    { ruta: '/graficas/dona-http', texto: 'Donas Http' },
  ]
}
