import { firebaseConfig } from './../enviroments/enviroments';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  public uploadJson(){
    fetch('./api/pippo').then(resp=> resp.text()).then(text=> console.log(text))
  }



  private app = initializeApp(firebaseConfig);
  private db = getFirestore(this.app);

// Get a list of frutta from your database
public async getfrutta() {
  const fruttaCol = collection(this.db, 'frutta');
  const fruttaSnapshot = await getDocs(fruttaCol);
  const fruttaList = fruttaSnapshot.docs.map(doc => doc.data());
  console.log(fruttaList);

  return fruttaList;
}

}
