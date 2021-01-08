import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../services/trainings.service';
import { Training } from '../models';
import { Exercise } from '../models';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {


  constructor(public trService:TrainingsService) {}
  
  ngOnInit(): void {
    
  }

}