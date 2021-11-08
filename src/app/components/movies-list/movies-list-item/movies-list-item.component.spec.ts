import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListItemComponent } from './movies-list-item.component';

describe('MoviesListItemComponent', () => {
  let component: MoviesListItemComponent;
  let fixture: ComponentFixture<MoviesListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
