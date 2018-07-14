import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatManagerComponent } from './cat-manager.component';

describe('CatManagerComponent', () => {
  let component: CatManagerComponent;
  let fixture: ComponentFixture<CatManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
