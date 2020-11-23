import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../services/trainings.service';
import { Training } from '../models';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private trService:TrainingsService) { }
  

  ngOnInit(): void {
  }

}
