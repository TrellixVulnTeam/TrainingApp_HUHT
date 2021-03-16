import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainComponent } from './train/train.component';
import { TrainingComponent } from './training/training.component';
import { TrainingsComponent } from './trainings/trainings.component';

const routes: Routes = [
  { path: '', component: TrainingsComponent},
  { path: 'trainings/:id', component: TrainingComponent },
  { path: 'trainings/:id/train', component: TrainComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }