import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessbooksUpdateComponent } from './messbooks-update.component';

describe('MessbooksUpdateComponent', () => {
  let component: MessbooksUpdateComponent;
  let fixture: ComponentFixture<MessbooksUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessbooksUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessbooksUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
