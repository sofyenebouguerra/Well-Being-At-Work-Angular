import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptaComponent } from './opta.component';

describe('OptaComponent', () => {
  let component: OptaComponent;
  let fixture: ComponentFixture<OptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
