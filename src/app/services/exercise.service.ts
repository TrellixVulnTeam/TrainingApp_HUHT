import { Injectable } from '@angular/core';
import { Exercise } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  Exercises:Exercise[] = [];

  getExercises(): Exercise[] {
    return this.Exercises;
  }

  addExercise(name:string, level:number){
    // this.firestore.collection('Exercises').add({
    //     name: name,
    //     level: level
    //   });
    console.log("Exercise was created");
  }
  
  constructor() {
    
  }
}
