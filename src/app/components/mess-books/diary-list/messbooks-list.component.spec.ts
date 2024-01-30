import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessbooksListComponent } from './messbooks-list.component';

describe('MessbooksListComponent', () => {
  let component: MessbooksListComponent;
  let fixture: ComponentFixture<MessbooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessbooksListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessbooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
