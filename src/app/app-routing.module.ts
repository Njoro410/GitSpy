import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  {path: '', redirectTo:"/header", pathMatch:"full"},
  {path: 'header', component: HeaderComponent},
  {path: 'second-comp', component: UserDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
