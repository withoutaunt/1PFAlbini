import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsqueletoComponent } from './layout/esqueleto/esqueleto.component';

const routes: Routes = [
  {
    path:'',
    component: EsqueletoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
