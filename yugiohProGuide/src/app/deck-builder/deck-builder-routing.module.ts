import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeckBuilderPage } from './deck-builder.page';

const routes: Routes = [
  {
    path: '',
    component: DeckBuilderPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeckBuilderPageRoutingModule {}
