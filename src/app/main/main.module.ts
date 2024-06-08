import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home-page/home-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';



@NgModule({
  declarations: [
    // Pages
    HomeComponent,
    LayoutPageComponent,

    // Component

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    MaterialModule
  ]
})
export class MainModule { }
