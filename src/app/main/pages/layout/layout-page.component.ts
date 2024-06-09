import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';



@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit {

  public sidebarItems = [
    { label: 'Home', icon: 'home', url: './home' },
    { label: 'Configuración', icon: 'settings', url: './configuration' },
    { label: 'Ejercicios', icon: 'fitness_center', url: './exercise' },
    { label: 'Alumnos', icon: 'group', url: './alumns' },
    { label: 'Comunidad', icon: 'diversity_3', url: './community/home' }

  ]

  constructor( private authService: AuthService,
               private router: Router) { }

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
