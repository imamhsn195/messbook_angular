import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsUpdateComponent } from './transactions-update.component';

describe('TransactionsUpdateComponent', () => {
  let component: TransactionsUpdateComponent;
  let fixture: ComponentFixture<TransactionsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
