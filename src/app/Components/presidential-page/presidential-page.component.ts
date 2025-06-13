import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/Core/services/Candidates/candidate.service';

@Component({
  selector: 'app-presidential-page',
  templateUrl: './presidential-page.component.html',
  styleUrls: ['./presidential-page.component.css']
})
export class PresidentialPageComponent implements OnInit {

    // data : [] = [];
    data: any;

  openCamera : boolean = false
  constructor(private candidate : CandidateService) {
    // setInterval(() => {
    //   this.openCamera = false
    // }, 10000);
  }

  ngOnInit(): void {
    this.getAllCandidates();
  }

  getAllCandidates() {
        this.candidate.getCandidates().subscribe({
    next : (res) => {
      console.log(res);
      this.data = res.$values;
      console.log(this.data);
    },
    error : (err) => {
        console.log(err);
      }
    })
  }

  returnImage(image : any) {
    return 'data:image/jpeg;base64,' + image;
  }

  openPopup() {
    this.openCamera = true
  }

  closePopup(event: boolean) {
    this.openCamera = event
  }


}
