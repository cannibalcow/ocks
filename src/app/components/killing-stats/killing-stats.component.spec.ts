import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillingStatsComponent } from './killing-stats.component';

describe('KillingStatsComponent', () => {
  let component: KillingStatsComponent;
  let fixture: ComponentFixture<KillingStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillingStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillingStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
