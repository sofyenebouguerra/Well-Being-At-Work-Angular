import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCollaborationComponent } from './view-collaboration.component';

describe('ViewCollaborationComponent', () => {
  let component: ViewCollaborationComponent;
  let fixture: ComponentFixture<ViewCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCollaborationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
