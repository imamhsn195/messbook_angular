import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsCreateComponent } from './transactions-create.component';

describe('TransactionsCreateComponent', () => {
  let component: TransactionsCreateComponent;
  let fixture: ComponentFixture<TransactionsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransactionsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
