import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlmacenService } from './service/almacen.service';
import { FirestoreService } from './service/firestore.service';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cambioVer: any;
  enviarCambioVer: any = '6';
  cambioTemaOscuro: any
  cambioTemaClaro: any
  public get verT() : string {
    return this.servicio.ver;
  }
  
  constructor(public alertController: AlertController, private servicio: AlmacenService, private fireS: FirestoreService, private authS: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.fireS.getNotas().subscribe((res:any) => console.log(res))
    console.log(localStorage.getItem('uid'), localStorage.getItem('nameAuth'));
    
  }

   logout() {
    this.authS.logout();
    this.router.navigateByUrl('/auth/login', { replaceUrl: true });
  }

  async cambiarTema() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cambiar Tema',
      inputs: [
        {
          name: 'claro',
          type: 'radio',
          label: 'Claro',
          value: 'value1',
          handler: () => {
            this.cambioTemaClaro = true;
            this.cambioTemaOscuro = false;
          },
        },

        {
          name: 'oscuro',
          type: 'radio',
          label: 'Oscuro',
          value: 'value2',
          handler: () => {
            this.cambioTemaOscuro = true;
            this.cambioTemaClaro = false;
          }
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            if(this.cambioTemaClaro){
              const cambio = document.querySelector('#cambioTema');
              cambio.setAttribute('href', './assets/claro.css')
            }
            else if(this.cambioTemaOscuro){
              const cambio = document.querySelector('#cambioTema');
              cambio.setAttribute('href', './assets/oscuro.css')
            }
           
          }
        }
      ]
    });

    await alert.present();
  }

  async verIconos() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ver Iconos',
      inputs: [
        {
          name: 'Bloque',
          type: 'radio',
          label: 'Bloque',
          value: 'value1',
          handler: () => {
           this.cambioVer = '6';

          }
        },

        {
          name: 'Lista',
          type: 'radio',
          label: 'Lista',
          value: 'value2',
          handler: () => {
            this.cambioVer = '12';
          }
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.enviarCambioVer = this.cambioVer;
          }
        }
      ]
    });

    await alert.present();
  }

 
}
