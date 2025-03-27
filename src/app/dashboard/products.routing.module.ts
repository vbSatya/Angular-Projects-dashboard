import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 

const ProductsRouting: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRouting)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
