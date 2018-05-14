
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CointableComponent } from './cointable.component';

describe('CointableComponent', () => {
  let component: CointableComponent;
  let fixture: ComponentFixture<CointableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CointableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CointableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
