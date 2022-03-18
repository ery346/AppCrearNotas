import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerInfoPage } from './ver-info.page';

const routes: Routes = [
  {
    path: '',
    component: VerInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerInfoPageRoutingModule {}
