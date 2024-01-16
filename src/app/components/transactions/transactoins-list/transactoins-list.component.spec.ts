import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactoinsListComponent } from './transactoins-list.component';

describe('TransactoinsListComponent', () => {
  let component: TransactoinsListComponent;
  let fixture: ComponentFixture<TransactoinsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactoinsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactoinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
