
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinexComponent } from './coinex.component';

describe('CoinexComponent', () => {
  let component: CoinexComponent;
  let fixture: ComponentFixture<CoinexComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
