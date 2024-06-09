import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout/layout-page.component';
import { HomeComponent } from './pages/home/home-page.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { AlumnsComponent } from './pages/alumns/alumns.component';
import { CommunityComponent } from './pages/community/community.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'home', component: HomeComponent },

      { path: 'configuration', component: ConfigurationComponent },

      { path: 'exercise', component: ExerciseComponent },

      { path: 'alumns', component: AlumnsComponent },

      { path: 'community', component: CommunityComponent },

      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
