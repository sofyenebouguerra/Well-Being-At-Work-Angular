import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCollaborationComponent } from './edit-collaboration.component';

describe('EditCollaborationComponent', () => {
  let component: EditCollaborationComponent;
  let fixture: ComponentFixture<EditCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCollaborationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
