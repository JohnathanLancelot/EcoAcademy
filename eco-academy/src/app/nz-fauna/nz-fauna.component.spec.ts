import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NzFaunaComponent } from './nz-fauna.component';

describe('NzFaunaComponent', () => {
  let component: NzFaunaComponent;
  let fixture: ComponentFixture<NzFaunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NzFaunaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NzFaunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
