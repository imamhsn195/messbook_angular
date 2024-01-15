import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessBookComponent } from './mess-book.component';

describe('MessBookComponent', () => {
  let component: MessBookComponent;
  let fixture: ComponentFixture<MessBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
