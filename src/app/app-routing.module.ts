import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'category/:cat',component:CategoriesComponent},
  {path:'details/:id',component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
