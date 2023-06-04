// Projeto Portfolio

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografiaComponent } from './biografia/biografia.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', title: 'Bernardo Bonifácio', component: HomeComponent },
  { path: 'biografia', title: 'Biografia', component: BiografiaComponent },
  { path: 'projetos', title: 'Projetos', component: ProjetosComponent },
  {
    path: 'experiencias',
    title: 'Experiências',
    component: ExperienciasComponent,
  },
  { path: 'skills', title: 'Skills', component: SkillsComponent },
  {
    path: 'certificados',
    title: 'Certificados',
    component: CertificadosComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
