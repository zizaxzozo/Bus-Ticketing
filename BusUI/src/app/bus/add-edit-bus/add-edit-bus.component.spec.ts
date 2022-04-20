import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBusComponent } from './add-edit-bus.component';

describe('AddEditBusComponent', () => {
  let component: AddEditBusComponent;
  let fixture: ComponentFixture<AddEditBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
