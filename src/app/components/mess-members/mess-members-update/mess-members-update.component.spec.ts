import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessMembersUpdateComponent } from './mess-members-update.component';

describe('MessMembersUpdateComponent', () => {
  let component: MessMembersUpdateComponent;
  let fixture: ComponentFixture<MessMembersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessMembersUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessMembersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
