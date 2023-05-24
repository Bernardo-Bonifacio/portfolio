import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiografiaComponent } from './biografia/biografia.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificadosComponent } from './certificados/certificados.component';

const routes: Routes = [
  { path: 'biografia', title: 'Biografia', component: BiografiaComponent },
  { path: 'projetos', title: 'Projetos', component: ProjetosComponent },
  { path: 'experiencias', title: 'Experiências', component: ExperienciasComponent },
  { path: 'skills', title: 'Skills', component: SkillsComponent },
  { path: 'certificados', title: 'Certificados', component: CertificadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
