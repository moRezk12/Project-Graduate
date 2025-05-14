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
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { HeroaboutComponent } from './Components/About/heroabout/heroabout.component';
import { OurmissionComponent } from './Components/About/ourmission/ourmission.component';
import { MainfeaturesComponent } from './Components/About/mainfeatures/mainfeatures.component';
import { ReviewComponent } from './Components/About/review/review.component';
import { TeamComponent } from './Components/About/team/team.component';
import { HerohelpComponent } from './Components/Help/herohelp/herohelp.component';
import { HelppageComponent } from './pages/helppage/helppage.component';
import { SidebarComponent } from './layouts/dashboard Admin/sidebar/sidebar.component';
import { AdmindashboardComponent } from './layouts/dashboard Admin/admindashboard/admindashboard.component';
import { NavbaradminComponent } from './layouts/dashboard Admin/navbaradmin/navbaradmin.component';
import { StatisticsComponent } from './Components/Dashboard Admin/statistics/statistics.component';
import { CandidatemanagementComponent } from './Components/Dashboard Admin/candidatemanagement/candidatemanagement.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { OpencameraComponent } from './Components/opencamera/opencamera.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}


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
    ResultPageComponent,
    HeroaboutComponent,
    OurmissionComponent,
    MainfeaturesComponent,
    ReviewComponent,
    TeamComponent,
    HerohelpComponent,
    HelppageComponent,
    SidebarComponent,
    AdmindashboardComponent,
    NavbaradminComponent,
    StatisticsComponent,
    CandidatemanagementComponent,
    OpencameraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    CarouselModule,
    SweetAlert2Module.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot(),
    

  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
