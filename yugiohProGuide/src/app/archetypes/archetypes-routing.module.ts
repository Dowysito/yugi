import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchetypesPage } from './archetypes.page';

const routes: Routes = [
  {
    path: '',
    component: ArchetypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchetypesPageRoutingModule {}
