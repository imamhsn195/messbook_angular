import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessMembersCreateComponent } from './mess-members-create.component';

describe('MessMembersCreateComponent', () => {
  let component: MessMembersCreateComponent;
  let fixture: ComponentFixture<MessMembersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessMembersCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessMembersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
