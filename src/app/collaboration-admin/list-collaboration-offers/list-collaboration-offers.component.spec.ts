import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollaborationOffersComponent } from './list-collaboration-offers.component';

describe('ListCollaborationOffersComponent', () => {
  let component: ListCollaborationOffersComponent;
  let fixture: ComponentFixture<ListCollaborationOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCollaborationOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCollaborationOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
