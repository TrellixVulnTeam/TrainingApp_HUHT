import { Injectable } from '@angular/core';
import { Exercise } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  getExercises(): Exercise[] {
    const exercises:Exercise[] = [
      {
        name: 'Push ups',
        id: 1,
        level: 2
      },
      {
        name: 'Pull ups',
        id: 2,
        level: 4
      },
      {
        name: 'squats',
        id: 3,
        level: 2
      }
    ];

    return exercises;
  }

  exerciseId = this.getExercises();

  constructor() { }
}
