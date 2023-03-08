import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClashCardComponent } from './clash-card.component';

describe('ClashCardComponent', () => {
  let component: ClashCardComponent;
  let fixture: ComponentFixture<ClashCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClashCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
