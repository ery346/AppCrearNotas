import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/home/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.email] ],
    password: ['', [Validators.minLength(6)] ],

  })
  constructor(  private fb: FormBuilder,
                private authS: AuthService,
                private router: Router,
                private loadingController: LoadingController,
                private alertController: AlertController,) { }

  ngOnInit() {
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
 
    const user = await this.authS.login(this.miFormulario.value)
    await loading.dismiss();
 
    if (user) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.showAlert('Login failed', 'Please try again!');
    }
  }
 
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    })
    await alert.present();
    
  }

}
