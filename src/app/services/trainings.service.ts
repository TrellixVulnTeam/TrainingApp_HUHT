import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseService } from '../services/exercise.service';
import { Training } from '../models';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  Trainings:Training[];

  constructor(private route: Router, private exService:ExerciseService, firestore: AngularFirestore) {
    let tr = firestore.collection('Trainings').valueChanges();
    tr.subscribe(training => this.Trainings = training);
  }


  getTrainings():Training[]{
    return this.Trainings;
  }
  
  getTraining(){
    const tr = this.getTrainings();
    if(typeof tr[(this.route.url.split('/').slice(-1)[0])] === 'number'){
      return tr[(this.route.url.split('/')[1])];
    }
    return tr[(this.route.url.split('/')[2])];
  }
  
  addTraining(){
    // let training = new training(postsRef.push().newPostRef.key);
    firestore().collection('Trainings').add({
      
    });
  }
}
/*
name:string;
id:number;
rounds:number;
exercisesWithReps:exerciseWithNum[];
sets:any[][];
created_by:boolean;
*/ 
