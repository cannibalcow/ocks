import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillingFeedComponent } from './killing-feed.component';

describe('KillingFeedComponent', () => {
  let component: KillingFeedComponent;
  let fixture: ComponentFixture<KillingFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillingFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillingFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
