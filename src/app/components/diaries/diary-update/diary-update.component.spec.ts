import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryUpdateComponent } from './diary-update.component';

describe('MessbooksUpdateComponent', () => {
  let component: DiaryUpdateComponent;
  let fixture: ComponentFixture<DiaryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiaryUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
