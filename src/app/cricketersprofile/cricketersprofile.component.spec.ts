import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketersprofileComponent } from './cricketersprofile.component';

describe('CricketersprofileComponent', () => {
  let component: CricketersprofileComponent;
  let fixture: ComponentFixture<CricketersprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketersprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketersprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
