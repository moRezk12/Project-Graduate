import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CandidateService } from 'src/app/Core/services/Candidates/candidate.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements  OnInit {

  data  :any
  id : any
  constructor(private locatinRoute:Location, private activeRoute : ActivatedRoute , private candidate: CandidateService){
    this.id = this.activeRoute.snapshot.paramMap.get('id');
  }

  GoBack() {
    this.locatinRoute.back()

  }

  ngOnInit(): void {
    console.log(this.id);
    this.getCandidateById();
  }

  getCandidateById() {
    this.candidate.getCandidateById(this.id).subscribe({
      next : (res) => {
        console.log(res);
        this.data = res;
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

  returnImage(image : any) {
    return 'data:image/jpeg;base64,' + image;
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }



}
