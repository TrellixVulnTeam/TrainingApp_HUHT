import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../services/trainings.service';
import { Training } from '../models';
import { Exercise } from '../models';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  trainings:Training[] = this.trService.getTrainings();
  ex = [];
  
  constructor(private trService:TrainingsService) {}
  ngOnInit(): void {
    for (let i = 0; i < this.trainings.length; i++) {
      this.ex[i] = this.trainings[i].getExercises(3)
    }
  }

}
