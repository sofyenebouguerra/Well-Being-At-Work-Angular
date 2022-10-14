import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublibtyComponent } from './add-publibty.component';

describe('AddPublibtyComponent', () => {
  let component: AddPublibtyComponent;
  let fixture: ComponentFixture<AddPublibtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPublibtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPublibtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
