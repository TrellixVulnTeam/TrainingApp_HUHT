import { Injectable } from '@angular/core';
import { Exercise } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  Exercises:Exercise[] = [];

  async getExercises(): Promise<Exercise[]> {
    fetch(`https://my-json-server.typicode.com/druber07/PullApp_Backend/Exercises`)
    .then(response => response.json())
    .then(data =>{ 
      this.Exercises[this.Exercises.length] = data
    })

    return this.Exercises;
  }


  constructor() {
    this.getExercises();
  }
}
