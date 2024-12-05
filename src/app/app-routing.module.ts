import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';
import { RegisterComponent } from './Components/Auth/register/register.component';
import { TypeElectionComponent } from './Components/candidatesPage/type-election/type-election.component';


const routes: Routes = [

  {
    path: '',
        component: MainlayoutComponent,
        children: [
          {path:'',redirectTo:'home',pathMatch:'full'},
          { path: 'home', component : HomePageComponent  },
          { path: 'typeElection', component : TypeElectionComponent  },
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
