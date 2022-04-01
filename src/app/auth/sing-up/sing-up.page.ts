import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/home/service/auth.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    //[ 'valor de inicio', validacion sincrona, validacion asincrona ]
    email: ['', [Validators.email] ],
    password: ['', [Validators.minLength(6)] ],

  })
  constructor(private fb: FormBuilder,
              private authS: AuthService,
              private router: Router,
              private loadingController: LoadingController,
              private alertController: AlertController,
               ) { }

  ngOnInit() {
  }

  async enviar(){
    const loading = await this.loadingController.create()
      await loading.present()
   
    
    const user = await this.authS.register(this.miFormulario.get('email').value, this.miFormulario.get('password').value)
     await loading.dismiss()
   
    
    if (user) {
      this.router.navigateByUrl('/auth/login');
      this.miFormulario.reset();
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }

    
  }

   async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    })
     await alert.present()
    
  }
}
