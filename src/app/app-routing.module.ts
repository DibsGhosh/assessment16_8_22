import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonComponent } from './person/person.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path: "person", component: PersonComponent},
  {
    path: "studentDetails", 
    component:StudentDetailsComponent
  },
  {
    path:"**", 
    component:PageNotFoundComponent
  },
  {
    path:"",
    redirectTo:"person",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
