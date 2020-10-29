import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../services/trainings.service';
import { ExerciseService } from '../services/exercise.service';
import { Training, Exercise } from '../models';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

  trainings = this.trService.getTrainings();
  training = this.trService.getTraining();
  exercises = this.exService.getExercises();

  ex = this.training.getExercises(0);
  
  UptadeName(newName:string){
    if(this.validate(newName)){
      this.training.name = newName;
    }
  }

  validate(msg:string){
    if(msg != ""){
      let found:boolean = false;

      for (let i = 0; i < this.trainings.length; i++) {
        if(this.training.name != this.trainings[i].name){
          found = true;
        }
      }
      if(!found){
        return true;
      }
      return false;
    }
    return false;
  }


//   [
//     [_num_, [{_reps_, ex1},{_reps_, ex2},{_reps_, ex3}]],    -
//     [_num_, [{_reps_, ex1},{_reps_, ex2},{_reps_, ex3}]],
//     [_num_, [{_reps_, ex1},{_reps_, ex2},{_reps_, ex3}]],
//  ]
  constructor(private trService:TrainingsService, private exService:ExerciseService) {
    for (let i = 0; i < this.training.sets.length; i++) {
      for (let j = 0; j < this.training.sets[i][0]; j++) {
        console.log(this.training.sets[i][0]);
        console.log(this.training.sets[i][1].reps);
      }
    }
  }
  
  ngOnInit(): void {}

}
