import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewsletteComponent } from './form-newslette.component';

describe('FormNewsletteComponent', () => {
  let component: FormNewsletteComponent;
  let fixture: ComponentFixture<FormNewsletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNewsletteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNewsletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
