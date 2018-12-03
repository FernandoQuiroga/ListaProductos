import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productos-angular-lab';
  datos = [
    {codigo: 1, descripcion: "papas", precio: 10.55},
    {codigo: 2, descripcion: "mazzanas", precio: 1.00},
    {codigo: 3, descripcion: "melon", precio: 52.12},
    {codigo: 4, descripcion: "tomaco", precio: 96.00},
    {codigo: 5, descripcion: "cabanis", precio: 100.00},
  ];
}
