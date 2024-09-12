import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFirstComponent } from './add-first.component';

describe('AddFirstComponent', () => {
  let component: AddFirstComponent;
  let fixture: ComponentFixture<AddFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFirstComponent]
    });
    fixture = TestBed.createComponent(AddFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
