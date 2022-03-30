
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from 'src/app/models/notas.model';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  objetoparaVer: any;
  vertarjetas:any ;
  public get ver() : string {
    return this.vertarjetas
  }
  
  constructor(private router: Router) { }

  almacenar(datos: Nota){
    let tarjetas: any[] = [];
    // arroja el local storage y se asigna a tarjetas
    const localS = JSON.parse(localStorage.getItem('notas') || '[]');
    tarjetas = localS;
    // se agrega los datos al inicio del array
    tarjetas.unshift(datos);
    // manda una se;al para refrescar
    this.vertarjetas = Date.now();
  
    
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
  actualizarDatos(datos: Nota){
   
    let tarjetas: Nota[] = [];
    // arroja el local storage y se asigna a tarjetas
    const localS = JSON.parse(localStorage.getItem('notas') || '[]');
    tarjetas = localS;

    //busca el id del local storage y lo elimina
    let nuevoArr = tarjetas.filter((obj:Nota) => {
       return obj.id !== datos.id;
    });
    // crea nuevo array con el objeto eliminado
    // agrega los nuevos datos al inicio del array
    nuevoArr.unshift(datos);
 
     // manda una se;al para refrescar
     this.vertarjetas = Date.now();
  
    localStorage.setItem('notas', JSON.stringify(nuevoArr));
  }

  eliminarDatos(id: string){
    let tarjetas: Nota[] = [];
    // arroja el local storage y se asigna a tarjetas
    const localS = JSON.parse(localStorage.getItem('notas') || '[]');
    tarjetas = localS;

    //busca el id del local storage y lo elimina
    let nuevoArr = tarjetas.filter((obj:Nota) => {
       return obj.id !== id;
    });
    console.log(nuevoArr)
    localStorage.setItem('notas', JSON.stringify(nuevoArr));
     // manda una se;al para refrescar
     this.vertarjetas = Date.now();
  
  }
  


  // Crud con firebase realtime database 
  // postFirebase(valor: any){
  //   return this.http.post('https://notasdemo-default-rtdb.firebaseio.com/notas.json', valor).subscribe((e:any) => {console.log(e)})
  // }
  // getFirebase(){
  //   return this.http.get('https://notasdemo-default-rtdb.firebaseio.com/notas.json')

  // }
  // actualizarFirebase(valor:any){
  //   return this.http.put('https://notasdemo-default-rtdb.firebaseio.com/notas/-Mynwk244nLTfz450HCy.json', valor).subscribe((e:any) => {console.log(e)})
  // }
  // eliminarFirebase(){
  //   return this.http.delete('https://notasdemo-default-rtdb.firebaseio.com/notas/-MyUJ13EQD0aaVdvNQYd.json').subscribe((e:any) =>{console.log(e)})

  // }
}
