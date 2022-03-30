import { Injectable  } from '@angular/core';
import { collectionData, doc, docData, Firestore, updateDoc  } from '@angular/fire/firestore';

import { addDoc, collection, deleteDoc } from '@firebase/firestore';


import { Nota } from '../../models/notas.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firesS: Firestore, private router: Router ) { }


  getNotas(){
    const notasRef = collection(this.firesS, 'notasUwu');
    return collectionData(notasRef, {idField: 'id'});
  }

  getNotasPorId(id: string){
    const notasDocRef = doc(this.firesS, `notasUwu/${id}`);
    return docData(notasDocRef, {idField: 'id'});
  }

  postNota(nota: Nota){
    const notasRef = collection(this.firesS, 'notasUwu');
    return addDoc(notasRef, nota);
  }

  deleteNota(id: string){
    const notasDocRef = doc(this.firesS, `notasUwu/${id}`);
    return deleteDoc(notasDocRef);
  }

  uptdateNotas(nota: any){
    const notasDocRef = doc(this.firesS, `notasUwu/${nota.id}`);
    return updateDoc(notasDocRef, nota );
  }
}
