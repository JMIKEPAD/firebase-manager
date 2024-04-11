import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirebaseService } from './service/firebase.service';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { firebaseConfig } from './enviroments/enviroments';
import { MainDialogComponent } from "./components/main-dialog/main-dialog.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, MainDialogComponent]
})
export class AppComponent {
  title = 'firebase-manager';
  constructor(private firebaseService: FirebaseService){
    this.firebaseService.uploadJson();
    console.log('upload');

    this.firebaseService.getfrutta();
  }


}
