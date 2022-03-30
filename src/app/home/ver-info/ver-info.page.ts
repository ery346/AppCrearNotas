import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlmacenService } from '../service/almacen.service';
import { FirestoreService } from '../service/firestore.service';

@Component({
  selector: 'app-ver-info',
  templateUrl: './ver-info.page.html',
  styleUrls: ['./ver-info.page.scss'],
})
export class VerInfoPage implements OnInit {
  objFirestore: any;
  get info () {
    return this.servicio.mandarObj();
  }
  infoNota: FormGroup = this.fb.group({
    titulo: [''],
    descripcion: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, 
              public alertController: AlertController,
              private servicio: AlmacenService, 
              private router: Router,
              private fireS: FirestoreService) { }
  ngOnInit() {
    
    this.fireS.getNotas().subscribe((res:any) => {
     const obj = res.find((datos: any) => datos.descripcion === this.info.descripcion);
     this.objFirestore = obj;
    })

    if ( this.info === undefined ) {
      
    } else {
      this.infoNota.reset({
        titulo: this.info.titulo,
        descripcion: this.info.descripcion,
      })
    }
    
  }
  
  actualizar(){
    this.infoNota.value.id = this.info.id;
    this.infoNota.value.fecha= Date.now();
    if (this.infoNota.value.descripcion === '') {
      this.presentAlert();
    }else{
      this.servicio.actualizarDatos(this.infoNota.value);
      this.objFirestore.titulo = this.infoNota.value.titulo;
      this.objFirestore.descripcion= this.infoNota.value.descripcion;
      console.log(this.objFirestore)
      this.fireS.uptdateNotas(this.objFirestore)
      
      this.router.navigate(['home']);
      // this.servicio.actualizarFirebase(this.infoNota.value);
      this.infoNota.reset();
    }
  }
  eliminar(){
    this.presentAlertConfirm();
    // this.servicio.eliminarFirebase()
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Escribe algo en descripcion :3',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirma! :3',
      message: `Deseas eliminar la nota ??`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.fireS.deleteNota(this.objFirestore.id)
            this.servicio.eliminarDatos(this.info.id);
            this.router.navigateByUrl('home');

          }
        }
      ]
    });

    await alert.present();
  }
}
