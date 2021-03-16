import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from '../models';

import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  firestore = firebase.firestore();
  Trainings:Training[] = [];
  size = 0;

  getId(){
    if(this.route.url.split('/').length == 3){
      return this.route.url.split('/').slice(-1)[0];
    }
    return this.route.url.split('/').slice(-2)[0];
  }

  searchById(id:string){
    for(let i = 0;i < this.Trainings.length;i++){

      if(this.Trainings[i].id == id){
        return this.Trainings[i];
      }
    }
    
    console.log("undefined");
    return undefined;
  }

  firebaseSearchById(id:string){
    this.firestore.collection("Trainings").doc(id).get().then((doc) => {
      if (doc.exists){
          return new Training(doc.data().name, doc.id, doc.data().rounds, doc.data().sets, doc.data().created_by);
      }else {
          console.log("Didn't find the document");
      }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }

  getData(){
    this.firestore.collection("Trainings").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          this.Trainings[this.Trainings.length] = new Training(doc.data().name, doc.id, doc.data().rounds, doc.data().sets, doc.data().created_by);
        });
    });
  }

  addTraining(){
    this.firestore.collection("Trainings").add({
      "name": "Push",
      "rounds": 3,
      "sets":[
        {
          "ex": [
            {
              "name": "Push ups",
              "level": 2,
              "reps": 10
            },
            {
              "name": "Pull ups",
              "level": 2,
              "reps": 5
            },
            
          ],
          "reps": 1
        },
      ],
      "created_by": false,
    })
    .then((docRef) => {
        console.log("Training was added: ", docRef.id);
        this.firestore.collection("Trainings").doc(docRef.id).update({
          "id": docRef.id,
        });
        this.Trainings[this.Trainings.length] = new Training("Push", docRef.id, 3, [{ex: [{name: "Push ups",level: 2,reps: 10},{name: "Pull ups",level: 2,reps: 5}],reps: 1}], false);
    })
    .catch((error) => {
        console.error("Error adding: ", error);
    });
  }
  
  SetUpdate(id:string, set){
    this.firestore.collection("Trainings").doc(id).update({
      "sets": set
    });
  }
  constructor(private route: Router){
  }
}
