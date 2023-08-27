import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastikOtelComponent } from './lastik-otel/lastik-otel.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'lastikOtel', component: LastikOtelComponent },
  ])],
  exports: [RouterModule]
})
export class MainRoutingModule { }
