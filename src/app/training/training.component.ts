import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Component, OnInit } from '@angular/core';
import { ExercisesComponent } from '../exercises/exercises.component';
import { Training } from '../models';
import { TrainingsService } from '../services/trainings.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  training:Training;
  moving = true;

  drop_ex(event: CdkDragDrop<string[]>, i) {
    moveItemInArray(this.training.sets[i].ex, event.previousIndex, event.currentIndex);
  }
  drop_rounds(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.training.sets, event.previousIndex, event.currentIndex);
  }

  update(){
    
  }

  save(){
    this.trService.SetUpdate(this.training.id, this.training.sets);
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ExercisesComponent, dialogConfig);
  }

  constructor(private trService:TrainingsService, public dialog:MatDialog) {
    // this.training = new Training("", "", 0, [], false);
    this.training = trService.searchById(trService.getId());
  }
  
  ngOnInit(): void {
    
  }

}
