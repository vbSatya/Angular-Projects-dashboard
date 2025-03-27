import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  declarations: [DashboardComponent, ProductsComponent],
  imports: [CommonModule, RouterModule, MaterialModule, ProductsRoutingModule],
})
export class DashboardModule {}
