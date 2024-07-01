import { Component } from '@angular/core';

import {TableModule} from 'primeng/table';
import { Alumno } from '../../model/Alumno';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
  titulo: string = 'Lista de alumnos';
  losAlumnos: Alumno[] = [
    {
      id:1,
      nombre:'clark',
      paterno:'kent',
      materno:'El',
      email:'superman@gmail.com',
    },

    {
      id:2,
      nombre:'Ejemplo',
      paterno:'kent',
      materno:'El',
      email:'man@gmail.com',
    },

    {
      id:3,
      nombre:'Ejemplo',
      paterno:'kent',
      materno:'El',
      email:'man@gmail.com',
    },
    {
      id:4,
      nombre:'Ejemplo',
      paterno:'kent',
      materno:'El',
      email:'man@gmail.com',
    },
    {
      id:5,
      nombre:'Ejemplo',
      paterno:'kent',
      materno:'El',
      email:'man@gmail.com',
    },
    {
      id:6,
      nombre:'Ejemplo',
      paterno:'kent',
      materno:'El',
      email:'man@gmail.com',
    },
    {
      id:7,
      nombre:'Ejemplo',
      paterno:'kent',
      materno:'El',
      email:'man@gmail.com',
    },



  ];

}
