import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeckBuilderPageRoutingModule } from './deck-builder-routing.module';

import { DeckBuilderPage } from './deck-builder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeckBuilderPageRoutingModule
  ],
  declarations: [DeckBuilderPage]
})
export class DeckBuilderPageModule {}
