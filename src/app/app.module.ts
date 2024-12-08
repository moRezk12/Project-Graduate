import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HerohomeComponent } from './Components/home/herohome/herohome.component';
import { WhyComponent } from './Components/home/why/why.component';
import { StagesComponent } from './Components/home/stages/stages.component';
import { CandidatesComponent } from './Components/home/candidates/candidates.component';
import { StartnowComponent } from './Components/home/startnow/startnow.component';
import { StepbystepComponent } from './Components/home/stepbystep/stepbystep.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';
import { CandidatesPageComponent } from './pages/candidates-page/candidates-page.component';
import { TypeElectionComponent } from './Components/candidatesPage/type-election/type-election.component';
import { PresidentialelectionsPageComponent } from './pages/presidentialelections-page/presidentialelections-page.component';
import { SenateelectionsPageComponent } from './pages/senateelections-page/senateelections-page.component';
import { PresidentialPageComponent } from './Components/presidential-page/presidential-page.component';
import { SenatePageComponent } from './Components/senate-page/senate-page.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { PeopleassemblyPageComponent } from './Components/peopleassembly-page/peopleassembly-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { HerodetailsComponent } from './Components/DetailsPage/herodetails/herodetails.component';
import { AboutdetailsComponent } from './Components/DetailsPage/aboutdetails/aboutdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    AboutPageComponent,
    HerohomeComponent,
    WhyComponent,
    StagesComponent,
    CandidatesComponent,
    StartnowComponent,
    StepbystepComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MainlayoutComponent,
    CandidatesPageComponent,
    TypeElectionComponent,
    PresidentialelectionsPageComponent,
    SenateelectionsPageComponent,
    PresidentialPageComponent,
    PeopleassemblyPageComponent,
    SenatePageComponent,
    PeoplePageComponent,
    DetailsPageComponent,
    HerodetailsComponent,
    AboutdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    CarouselModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
