import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { TypeElectionComponent } from './Components/candidatesPage/type-election/type-election.component';
import { PresidentialelectionsPageComponent } from './pages/presidentialelections-page/presidentialelections-page.component';
import { SenateelectionsPageComponent } from './pages/senateelections-page/senateelections-page.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HelppageComponent } from './pages/helppage/helppage.component';
import { AdmindashboardComponent } from './layouts/dashboard Admin/admindashboard/admindashboard.component';
import { StatisticsComponent } from './Components/Dashboard Admin/statistics/statistics.component';
import { CandidatemanagementComponent } from './Components/Dashboard Admin/candidatemanagement/candidatemanagement.component';


const routes: Routes = [

  {
    path: '',
        component: MainlayoutComponent,
        children: [
          {path:'',redirectTo:'home',pathMatch:'full'},
          { path: 'home', component : HomePageComponent  },
          { path: 'typeElection', component : TypeElectionComponent  },
          { path: 'presidential', component : PresidentialelectionsPageComponent  },
          { path: 'senate', component : SenateelectionsPageComponent  },
          // { path: 'peopleAssembly', component : PeopleassemblyPageComponent  },
          {path : "peopleAssembly" , component : PeoplePageComponent},
          {path : "details" , component : DetailsPageComponent},
          {path : "result" , component : ResultPageComponent},
          {path : "about" , component : AboutPageComponent},
          {path : "help" , component : HelppageComponent}
        ]
  },

  {
    path: '',component : AdmindashboardComponent,
    children: [
      {path:'',redirectTo:'statistics',pathMatch:'full'},
      {path:'statistics',component : StatisticsComponent},
      {path:'candidatemanagement',component : CandidatemanagementComponent }
    ]
  },

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
