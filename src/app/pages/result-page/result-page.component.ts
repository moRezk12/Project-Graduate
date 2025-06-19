import { Component, OnInit } from '@angular/core';
import { VotingService } from 'src/app/Core/services/Voting/voting.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  strokeDasharray : number = 90 ;
  constructor(private _voting : VotingService){}

  ngOnInit(): void {

    this._voting.getVotersResults().subscribe({
      next : (res) => {
        console.log(res);
        // this.strokeDasharray = res.$values[0].result;
        // console.log(this.strokeDasharray);
      },
      error : (err) => {
        console.log(err);
      }

    })

  }

}
