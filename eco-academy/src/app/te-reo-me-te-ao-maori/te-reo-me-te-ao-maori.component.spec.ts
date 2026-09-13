import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeReoMeTeAoMaoriComponent } from './te-reo-me-te-ao-maori.component';

describe('TeReoMeTeAoMaoriComponent', () => {
  let component: TeReoMeTeAoMaoriComponent;
  let fixture: ComponentFixture<TeReoMeTeAoMaoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeReoMeTeAoMaoriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeReoMeTeAoMaoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
