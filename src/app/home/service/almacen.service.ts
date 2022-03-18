import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  objetoparaVer: any;
  constructor(private router: Router) { }

  almacenar(datos: any){
    let tarjetas: any[] = [];
    // arroja el local storage y se asigna a tarjetas
    const localS = JSON.parse(localStorage.getItem('notas') || '[]');
    tarjetas = localS;
    // se agrega los datos al inicio del array
    tarjetas.unshift(datos);

    localStorage.setItem('notas', JSON.stringify(tarjetas))
  }

  leerAlmacen(id: string){
    const localS = JSON.parse(localStorage.getItem('notas') || '[]');
    // busca el id que al que se le quiere cambiar los datos
    // retorna el objeto elegido
    const ident = localS.find((element: any) => {
      return element.id === id
    });
    this.objetoparaVer = ident;
    this.router.navigateByUrl('home/ver-info')
  
  }        
  mandarObj(){
    return this.objetoparaVer;
  }                                    
  actualizarDatos(datos: any){
   
    let tarjetas: any[] = [];
    // arroja el local storage y se asigna a tarjetas
    const localS = JSON.parse(localStorage.getItem('notas') || '[]');
    tarjetas = localS;

    //busca el id del local storage y lo elimina
    let nuevoArr = tarjetas.filter((obj:any) => {
       return obj.id !== datos.id;
    });
    // crea nuevo array con el objeto eliminado
    // agrega los nuevos datos al inicio del array
    nuevoArr.unshift(datos);
 
    localStorage.setItem('notas', JSON.stringify(nuevoArr));
  }

  eliminarDatos(id: any){
    let tarjetas: any[] = [];
    // arroja el local storage y se asigna a tarjetas
    const localS = JSON.parse(localStorage.getItem('notas') || '[]');
    tarjetas = localS;

    //busca el id del local storage y lo elimina
    let nuevoArr = tarjetas.filter((obj:any) => {
       return obj.id !== id;
    });
    console.log(nuevoArr)
    localStorage.setItem('notas', JSON.stringify(nuevoArr));
  }
}
