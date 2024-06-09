import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../material/material.module';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home-page.component';
import { LayoutPageComponent } from './pages/layout/layout-page.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { AlumnsComponent } from './pages/alumns/alumns.component';
import { CommunityComponent } from './pages/community/community.component';



@NgModule({
  declarations: [
    // Pages
    HomeComponent,
    LayoutPageComponent,
    ConfigurationComponent,
    ExerciseComponent,
    AlumnsComponent,
    CommunityComponent,

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
