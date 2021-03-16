import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExercisesComponent } from '../exercises/exercises.component';
import { TrainingsService } from '../services/trainings.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  constructor(public trService:TrainingsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    
  }
}
