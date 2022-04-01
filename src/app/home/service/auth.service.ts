import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async register(email:string, password:string ) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }
 
  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      this.getUid();
      const token = await this.auth.currentUser.getIdToken();
      if (token) {
        localStorage.setItem('token', token)
      }
      return user;
    } catch (e) {
      return null;
    }
  }
 
    getUid(){
    const uid =  this.auth.currentUser.uid;
    const email = this.auth.currentUser.email;
    localStorage.setItem('uid', uid);
    localStorage.setItem('nameAuth', email)
   
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('uid')
    return signOut(this.auth);
  }
}
