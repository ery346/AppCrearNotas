import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AlmacenService } from '../service/almacen.service';

@Component({
  selector: 'app-mostrar-notas',
  templateUrl: './mostrar-notas.page.html',
  styleUrls: ['./mostrar-notas.page.scss'],
})
export class MostrarNotasPage implements OnInit, OnChanges   {
  tarjetas: any[] = []
  @Input()vista: any;
  @Input()refrescaLocal: any;
  constructor( private service: AlmacenService) {
    
   }
  ngOnChanges(changes: SimpleChanges): void {

     if (changes.refrescaLocal) {
      const localS = JSON.parse(localStorage.getItem('notas'));
      this.tarjetas = localS ;
     }
   
    
     console.log(changes, this.refrescaLocal)
     

  }
  

  ngOnInit(): void {
    const localS = JSON.parse(localStorage.getItem('notas'));
    this.tarjetas = localS ;

  }

  verInfo(id: string){
    this.service.leerAlmacen(id);
  }

}
