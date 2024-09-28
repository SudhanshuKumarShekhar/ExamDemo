import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLogInComponent } from './mobile-log-in.component';

describe('MobileLogInComponent', () => {
  let component: MobileLogInComponent;
  let fixture: ComponentFixture<MobileLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
