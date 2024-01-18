import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessMembersListComponent } from './mess-members-list.component';

describe('MessMembersListComponent', () => {
  let component: MessMembersListComponent;
  let fixture: ComponentFixture<MessMembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessMembersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
