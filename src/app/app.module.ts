import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// firestore//
import { environment } from "../environments/environment";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
//auth//

///////////////
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home/home.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HomePageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
   

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], 
  bootstrap: [AppComponent],
})
export class AppModule {}
