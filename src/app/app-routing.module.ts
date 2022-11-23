import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewrestComponent } from './viewrest/viewrest.component';

const routes: Routes = [
  //path for restuarantslistcomponent
  {
    path:'',component:RestuarantsListComponent
  },
  //  //path for viewrestuarantComponent
  {
    path:'viewrest/:id',component:ViewrestComponent
  },
  //path for AddRestuarantComponent
  {
    path:'add-restuarant',component:AddRestuarantComponent
  },
  // path for updateRestuarantComponent
  {
    path:'update-restuarant/:id',component:UpdateRestuarantComponent
  },
  //path for deleteRestuarantComponent
  {
    path:'delete-restuarant/:id',component:DeleteRestuarantComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
