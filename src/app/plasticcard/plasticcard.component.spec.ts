import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticcardComponent } from './plasticcard.component';

describe('PlasticcardComponent', () => {
  let component: PlasticcardComponent;
  let fixture: ComponentFixture<PlasticcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlasticcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
