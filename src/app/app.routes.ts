import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',redirectTo:'/home',
        pathMatch: 'full',
    },

    {
    path : 'home', Component:HomeComponent,
    },
    {
        path: 'alumnos',
        component: AlumnosComponent,
    },
    {
        path: 'alumnosForm',
        component: AlumnosFormComponent,
    },
    {
        path: 'alumnosForm/:id',
        component: AlumnosFormComponent,
    },


];
