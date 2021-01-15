import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPcComponent } from './details-pc.component';

describe('DetailsPcComponent', () => {
  let component: DetailsPcComponent;
  let fixture: ComponentFixture<DetailsPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
