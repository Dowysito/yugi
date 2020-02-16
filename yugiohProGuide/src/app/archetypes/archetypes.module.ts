import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArchetypesPageRoutingModule } from './archetypes-routing.module';

import { ArchetypesPage } from './archetypes.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArchetypesPageRoutingModule
  ],
  declarations: [ArchetypesPage]
})
export class ArchetypesPageModule {}
