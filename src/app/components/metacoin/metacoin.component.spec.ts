import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MetacoinComponent } from './metacoin.component';
import { CommonModule } from '@angular/common';
import { MetacoinRoutingModule } from './metacoin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MetacoinService, Web3Service } from '../../services/services';

const SERVICES = [ Web3Service, MetacoinService ];

describe('MetacoinComponent', () => {
  let component: MetacoinComponent;
  let fixture: ComponentFixture<MetacoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetacoinComponent ],
      imports: [
        FormsModule,
        CommonModule,
        HttpClientModule,
        MetacoinRoutingModule
      ],
      providers: [SERVICES]
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
