import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeckBuilderPage } from './deck-builder.page';

describe('DeckBuilderPage', () => {
  let component: DeckBuilderPage;
  let fixture: ComponentFixture<DeckBuilderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeckBuilderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeckBuilderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
