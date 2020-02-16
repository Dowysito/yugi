import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArchetypesPage } from './archetypes.page';

describe('ArchetypesPage', () => {
  let component: ArchetypesPage;
  let fixture: ComponentFixture<ArchetypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchetypesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArchetypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
