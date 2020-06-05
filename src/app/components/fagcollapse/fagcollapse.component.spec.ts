import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FagcollapseComponent } from './fagcollapse.component';

describe('FagcollapseComponent', () => {
  let component: FagcollapseComponent;
  let fixture: ComponentFixture<FagcollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FagcollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FagcollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
