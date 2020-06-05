import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolcardsComponent } from './solcards.component';

describe('SolcardsComponent', () => {
  let component: SolcardsComponent;
  let fixture: ComponentFixture<SolcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
