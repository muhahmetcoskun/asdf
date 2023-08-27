import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastikOtelComponent } from './lastik-otel.component';

describe('LastikOtelComponent', () => {
  let component: LastikOtelComponent;
  let fixture: ComponentFixture<LastikOtelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastikOtelComponent]
    });
    fixture = TestBed.createComponent(LastikOtelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
