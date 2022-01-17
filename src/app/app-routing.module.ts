import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CartComponent } from './components/cart/cart.component';
import { ManageproductsComponent } from './components/manageproducts/manageproducts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'manage', component: ManageproductsComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'updateproduct/:id', component: UpdateproductComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
