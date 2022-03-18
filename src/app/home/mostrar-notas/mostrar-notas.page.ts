import { Component, OnInit } from '@angular/core';
import { AlmacenService } from '../service/almacen.service';

@Component({
  selector: 'app-mostrar-notas',
  templateUrl: './mostrar-notas.page.html',
  styleUrls: ['./mostrar-notas.page.scss'],
})
export class MostrarNotasPage implements OnInit   {
  tarjetas: any[] = []
 
  constructor( private service: AlmacenService) {
    
   }

  ngOnInit(): void {
    const localS = JSON.parse(localStorage.getItem('notas'));
    this.tarjetas = localS ;

  }

  verInfo(id: string){
    this.service.leerAlmacen(id);
  }

}
