import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlmacenService } from '../service/almacen.service';


@Component({
  selector: 'app-nueva-nota',
  templateUrl: './nueva-nota.page.html',
  styleUrls: ['./nueva-nota.page.scss'],
})
export class NuevaNotaPage implements OnInit {
  infoNota: FormGroup = this.fb.group({
    titulo: [''],
    descripcion: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, 
              public alertController: AlertController,
              private servicio: AlmacenService, 
              private router: Router) { }

  ngOnInit() {
    
  }

  crear(){
    this.infoNota.value.fecha= Date.now()
    this.infoNota.value.id = Date.now().toString().slice(4, 10)
    if (this.infoNota.valid) {
      this.servicio.almacenar(this.infoNota.value);
      this.router.navigate(['home']);
      this.infoNota.reset();
      setTimeout(() => {
        window.location.reload() 
      }, 50);
    }else{
      this.presentAlert()
    }
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


}
