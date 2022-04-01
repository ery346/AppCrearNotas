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
      console.log(user);
      const token = await this.auth.currentUser.getIdToken();
      if (token) {
        localStorage.setItem('token', token)
      }
      return user;
    } catch (e) {
      return null;
    }
  }
 
   getUserLogged(){
  const udi =  this.auth.currentUser;
  return udi.uid;
  }
  logout() {
    localStorage.removeItem('token');
    return signOut(this.auth);
  }
}
