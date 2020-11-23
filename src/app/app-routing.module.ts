import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { TrainComponent } from './train/train.component';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingsComponent } from './trainings/trainings.component';

const routes: Routes = [
  { path: '', component: TrainingsComponent},
  { path: 'Trainings/:id', component: TrainingDetailsComponent },
  { path: 'Trainings/:id/train', component: TrainComponent },
  { path: 'Exercises', component: ExercisesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }