import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list/:id',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'archetypes',
    loadChildren: () => import('./archetypes/archetypes.module').then( m => m.ArchetypesPageModule)
  },
  {
    path: 'card/:id',
    loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'deck-builder',
    loadChildren: () => import('./deck-builder/deck-builder.module').then( m => m.DeckBuilderPageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then( m => m.AgregarPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
