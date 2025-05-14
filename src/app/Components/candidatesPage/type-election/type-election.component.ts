import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/Core/services/Elections/election.service';

@Component({
  selector: 'app-type-election',
  templateUrl: './type-election.component.html',
  styleUrls: ['./type-election.component.css']
})
export class TypeElectionComponent implements OnInit {

  constructor(private election : ElectionService){}

  ngOnInit(): void {
    this.election.getElections().subscribe({
      next : (res) => {
        console.log(res);
      },
      error : (err) => {
        console.log(err);
      }
    })
  }



}
