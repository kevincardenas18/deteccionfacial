import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './pages/upload/upload.component';
import { HomeComponent } from './pages/home/home.component';
import { IdentificarComponent } from './pages/identificar/identificar.component';
import { DeteccionComponent } from './pages/deteccion/deteccion.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';


const routes:Routes=[

  {path: 'home', component:HomeComponent},
  {path: 'asistencia', component:AsistenciaComponent},
  {path: 'upload', component:UploadComponent},
  {path: 'identificar', component:IdentificarComponent},
  {path: 'deteccion', component:DeteccionComponent},

  {path:'', pathMatch:'full', redirectTo:'/identificar'},
  {path:'**', pathMatch:'full', redirectTo:'/identificar'}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
