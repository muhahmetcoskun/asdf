import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimTurleriTanimlaComponent } from './prim-turleri-tanimla/prim-turleri-tanimla.component';
import { TatilGunuTanimlaHomeComponent } from './tatil-gunu-tanimla-home/tatil-gunu-tanimla-home.component';





@NgModule({


  imports: [RouterModule.forChild([
    { path: 'tatilgunutanimla', component: TatilGunuTanimlaHomeComponent },
    { path: 'primturleritanimla', component: PrimTurleriTanimlaComponent },
  ])],
  exports: [RouterModule]
})
export class TanimlamalarRoutingModule { }
