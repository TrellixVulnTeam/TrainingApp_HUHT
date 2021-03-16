import { Component, OnInit } from '@angular/core';
import { Training } from '../models';
import { TrainingsService } from '../services/trainings.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  training:Training;
  ex = [];
  shownEx:number = 0;
  timeLeft:number = 5;
  done:boolean = true; 
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
    if(this.shownEx < this.ex.length-1){
      this.shownEx++;
      this.timeLeft = 5;
      clearInterval(this.interval);
      this.startTimer()
    }else{
      this.done = false;
    }
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  constructor(private trService:TrainingsService) {
    this.training = trService.searchById(trService.getId());
    this.ex = this.training.getExercises();
  }

  ngOnInit(): void {
    this.startTimer();
  }

}
