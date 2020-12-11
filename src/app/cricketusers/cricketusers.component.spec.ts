import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketusersComponent } from './cricketusers.component';

describe('CricketusersComponent', () => {
  let component: CricketusersComponent;
  let fixture: ComponentFixture<CricketusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketusersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
