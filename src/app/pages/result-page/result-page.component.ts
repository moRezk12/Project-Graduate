import { Component, OnInit } from '@angular/core';
import { VotingService } from 'src/app/Core/services/Voting/voting.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  data : any
  strokeDasharray : number = 90 ;
  maxNumber : number = 0;
  topCandidates: any[] = [];
  constructor(private _voting : VotingService){}

  token : any ;
  ngOnInit(): void {
    this.token = localStorage.getItem('token') || '';
    this._voting.getVotersResults().subscribe({
      next : (res) => {
        console.log(res);
        this.data = res.$values;

        this.data.forEach((element : any) => {
          if(element.voteCount > this.maxNumber){
            this.maxNumber = element.voteCount;
          }
        });
        this.topCandidates = this.data.filter((el: any) => el.voteCount === this.maxNumber);
        // console.log(this.strokeDasharray);
      },
      error : (err) => {
        console.log(err);
      }

    })

  }

}
