import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  elementosDelMenu : MenuItem[] | undefined;
  ngOnInit(): void {
      this.elementosDelMenu = [
        {
          label : 'Home',
          icon : 'pi pi-home',
          routerLink: ['/'],
        },
        {
          label : 'Alumnos',
          icon : 'pi pi-users',
          routerLink: ['/alumnos'],
        },
        {
          label : 'Alumnos Form',
          icon : 'pi pi-user-edit',
          routerLink: ['/alumnosForm'],
        }
      ]
  }

}
