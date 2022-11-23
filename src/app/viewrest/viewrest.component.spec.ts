import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrestComponent } from './viewrest.component';

describe('ViewrestComponent', () => {
  let component: ViewrestComponent;
  let fixture: ComponentFixture<ViewrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
