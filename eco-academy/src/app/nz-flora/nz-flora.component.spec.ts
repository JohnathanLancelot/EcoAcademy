import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzFloraComponent } from './nz-flora.component';

describe('NzFloraComponent', () => {
  let component: NzFloraComponent;
  let fixture: ComponentFixture<NzFloraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzFloraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
