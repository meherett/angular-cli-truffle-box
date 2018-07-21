import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetacoinComponent } from './metacoin.component';

describe('MetacoinComponent', () => {
  let component: MetacoinComponent;
  let fixture: ComponentFixture<MetacoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetacoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetacoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
