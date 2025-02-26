import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMatchesComponent } from './best-matches.component';

describe('BestMatchesComponent', () => {
  let component: BestMatchesComponent;
  let fixture: ComponentFixture<BestMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestMatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
