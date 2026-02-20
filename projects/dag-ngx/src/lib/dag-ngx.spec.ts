import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagNgx } from './dag-ngx';

describe('DagNgx', () => {
  let component: DagNgx;
  let fixture: ComponentFixture<DagNgx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DagNgx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DagNgx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
