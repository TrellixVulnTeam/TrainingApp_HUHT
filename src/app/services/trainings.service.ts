import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseService } from '../services/exercise.service';
import { Training } from '../models';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  Trainings:Training[] = [];

  async getTrainings(): Promise<Training[]> {
    fetch(`https://my-json-server.typicode.com/druber07/PullApp_Backend/Trainings`)
    .then(response => response.json())
    .then(data =>{ 
      this.Trainings[this.Trainings.length] = new Training(data[this.Trainings.length].name, data[this.Trainings.length].id, data[this.Trainings.length].rounds, data[this.Trainings.length].sets, data[this.Trainings.length].created_by);
    })

    return this.Trainings;
  }

  getTraining(){
    if(this.route.url.split('/').length == 2){
      return this.searchById(this.route.url.split('/').slice(-1)[0]);
    }
  }

  searchById(id:string){
    for (let i = 0; i <= this.Trainings.length; i++) {
      try{
        if(this.Trainings[i].id == id){
          return this.Trainings[i];
        }
      }catch(e){
        console.log("Training wasn't found");
      }
    }
  }

  addTraining(){
    // let nameId:number = 0;
    // let found:boolean = false;

    // while(nameId < this.Trainings.length){
    //   for (let i = 0; i < this.Trainings.length; i++) {
    //     if(this.Trainings[i].name == "New training_"+nameId){
    //       found = true;
    //     }
    //   }

    //   if(found){
    //     break;
    //   }else{
    //     found = false;
    //     nameId++;
    //   }
    // }

    // this.firestore.collection('Trainings').add({
    //   name: "New training_"+(this.Trainings.length),
    //   rounds: 1,
    //   sets:[
    //     {
    //       1:1,
    //       2:{
    //           exercise: {
    //               name: 'Push ups',
    //               id: 'Gk5kIucibzb3scld1IgB',
    //               level: 2
    //           },
    //           reps: 1
    //       },
    //     },
    //   ],
    //   created_by: false
    // });
    
    // console.log("Training was created");
  }

  constructor(private route: Router, private exService:ExerciseService, private firestore: AngularFirestore) {
    this.getTrainings();
  }

}