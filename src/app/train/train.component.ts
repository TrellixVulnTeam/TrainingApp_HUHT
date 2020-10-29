import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../services/trainings.service';
import { ExerciseService } from '../services/exercise.service';
import { Training, Exercise } from '../models';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  
  //training = this.trService.getTraining();
  exercises = this.exService.getExercises();

  ifRound:number = 0;
  shownEx:number = 0;
  timeLeft:number = 5;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
    },1000)
  }

  skipTimer(){
    this.timeLeft = 0;
  }
  addTime(time){
    this.timeLeft = time+5;
    clearInterval(this.interval);
    this.startTimer()
  }
  exerciseDone(){
    this.shownEx++;
    this.timeLeft = 5;
    clearInterval(this.interval);
    this.startTimer()
  }
  // trainingDone(){
  //   if(this.shownEx == this.training.exercise.length){
  //     return false
  //   }
  //   console.log(this.ifRound+ " == " +this.training.round)
  //   return true
  // }
  pauseTimer() {
    clearInterval(this.interval);
  }

  constructor(private trService:TrainingsService, private exService:ExerciseService) { }

  ngOnInit(): void {
    this.startTimer();
  }

}
