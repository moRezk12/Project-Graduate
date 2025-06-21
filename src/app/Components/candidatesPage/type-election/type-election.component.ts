import { Component, OnInit } from '@angular/core';
import { ElectionService } from 'src/app/Core/services/Elections/election.service';
import { VotingService } from 'src/app/Core/services/Voting/voting.service';

@Component({
  selector: 'app-type-election',
  templateUrl: './type-election.component.html',
  styleUrls: ['./type-election.component.css']
})
export class TypeElectionComponent implements OnInit {

  constructor(private election : ElectionService , private _voting : VotingService){}

  data : any;
  name : any;


  ngOnInit(): void {

    this.getAllElections();

  }

  getAllElections(){
    this.election.getElections().subscribe({
    next : (res) => {
      console.log(res);
      this.data = res.$values;
      console.log(this.data);
      // this.data.forEach((election  : any) => {
      //   console.log(election.name);
      //   this.name = election.name;
      // });
    },
    error : (err) => {
        console.log(err);
      }
    })


  }



}
