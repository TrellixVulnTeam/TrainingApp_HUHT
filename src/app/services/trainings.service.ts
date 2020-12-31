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

  getTrainings():Training[]{
    return this.Trainings;
  }

  updateTrainings():string{
    this.firestore.collection("Trainings").ref
    .onSnapshot((doc) => {
      doc.forEach(function(data) {
        this.Trainings[this.Trainings.length+1] = new Training(data.data().name, data.id, data.data().roungs, data.data().sets, data.data().created_by);
      });
    });
    console.log(this.Trainings)
    return "Done!";
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
    let nameId:number = 0;
    let found:boolean = false;

    while(nameId < this.Trainings.length){
      for (let i = 0; i < this.Trainings.length; i++) {
        if(this.Trainings[i].name == "New training_"+nameId){
          found = true;
        }
      }

      if(found){
        break;
      }else{
        found = false;
        nameId++;
      }
    }

    this.firestore.collection('Trainings').add({
      name: "New training_"+(this.Trainings.length),
      rounds: 1,
      sets:[
        {
          1:1,
          2:{
              exercise: {
                  name: 'Push ups',
                  id: 'Gk5kIucibzb3scld1IgB',
                  level: 2
              },
              reps: 1
          },
        },
      ],
      created_by: false
    });
    
    console.log("Training was created");
  }

  constructor(private route: Router, private exService:ExerciseService, private firestore: AngularFirestore) {
    console.log(this.Trainings)
  }

}