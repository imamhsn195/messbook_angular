import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessbooksCreateComponent } from './messbooks-create.component';

describe('MessbooksCreateComponent', () => {
  let component: MessbooksCreateComponent;
  let fixture: ComponentFixture<MessbooksCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessbooksCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessbooksCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
