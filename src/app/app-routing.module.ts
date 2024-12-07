import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { TypeElectionComponent } from './Components/candidatesPage/type-election/type-election.component';
import { PresidentialelectionsPageComponent } from './pages/presidentialelections-page/presidentialelections-page.component';
import { SenateelectionsPageComponent } from './pages/senateelections-page/senateelections-page.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';


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
          {path : "peopleAssembly" , component : PeoplePageComponent}
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
