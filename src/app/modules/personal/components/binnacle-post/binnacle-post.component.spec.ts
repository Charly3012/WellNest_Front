import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinnaclePostComponent } from './binnacle-post.component';

describe('BinnaclePostComponent', () => {
  let component: BinnaclePostComponent;
  let fixture: ComponentFixture<BinnaclePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinnaclePostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinnaclePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
