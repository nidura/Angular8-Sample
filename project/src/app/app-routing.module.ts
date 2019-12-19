import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';


const routes: Routes = [
  {
    path: 'product/create',
    component: ProductAddComponent
  },
  // pass router parameter
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  //pass data list from router
  {
    path: 'products',
    component: ProductGetComponent,
    data: { title: 'data List' }
  }
  //redirect to home page
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //route to page not found
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
