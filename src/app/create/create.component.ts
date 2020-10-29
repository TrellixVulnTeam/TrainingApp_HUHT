import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../services/trainings.service';
import { ExerciseService } from '../services/exercise.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  training = this.trService.getTraining();
  exercises = this.exService.getExercises();

  constructor(private trService:TrainingsService, private exService:ExerciseService) { }

  ngOnInit(): void {
    this.trService.addTraining();
  }

}
