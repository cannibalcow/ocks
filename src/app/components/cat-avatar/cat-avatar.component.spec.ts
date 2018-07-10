import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAvatarComponent } from './cat-avatar.component';

describe('CatAvatarComponent', () => {
  let component: CatAvatarComponent;
  let fixture: ComponentFixture<CatAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
