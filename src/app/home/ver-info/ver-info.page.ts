import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlmacenService } from '../service/almacen.service';

@Component({
  selector: 'app-ver-info',
  templateUrl: './ver-info.page.html',
  styleUrls: ['./ver-info.page.scss'],
})
export class VerInfoPage implements OnInit {
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
              private router: Router) { }
  ngOnInit() {
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
      console.log(this.infoNota.valid)
      this.servicio.actualizarDatos(this.infoNota.value);
      this.router.navigate(['home']);
      this.infoNota.reset();
      setTimeout(() => {
        window.location.reload() 
      }, 50);
    }
  }
  eliminar(){
    this.presentAlertConfirm();
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
            this.servicio.eliminarDatos(this.info.id);
            this.router.navigateByUrl('home');
            setTimeout(() => {
              window.location.reload() 
            }, 30);

          }
        }
      ]
    });

    await alert.present();
  }
}
