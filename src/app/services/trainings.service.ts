import { Injectable, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseService } from '../services/exercise.service';
import { Training } from '../models';
import { AngularFirestore } from '@angular/fire/firestore';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  Trainings:Training[] = [];
  TrainingsSize:number = 0;

  constructor(private route: Router, private exService:ExerciseService, private firestore: AngularFirestore) {
    firestore.collection("Trainings").get()
    .subscribe((sn) => {
      sn.forEach((doc: any) => {
        this.Trainings[this.Trainings.length] = new Training(doc.data().name, doc.id, doc.data().rounds, doc.data().sets, doc.data().created_by);
      });
    });
  }

  getTrainings():Training[]{
    return this.Trainings;
  }

  getTraining(){
    if(this.route.url.split('/').slice(-1).length == 1){
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

    while(nameId < this.TrainingsSize){
      for (let i = 0; i < this.TrainingsSize; i++) {
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
    console.log(this.TrainingsSize);
    this.firestore.collection('Trainings').add({
      name: "New training_"+(this.Trainings.length+1),
      rounds: 1,
      sets:[
        {
          1:1,
          2:{
              exercise: {
                  name: 'Push ups',
                  id: 1,
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
}
