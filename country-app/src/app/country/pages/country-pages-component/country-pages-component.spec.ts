import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPagesComponent } from './country-pages-component';

describe('CountryPagesComponent', () => {
  let component: CountryPagesComponent;
  let fixture: ComponentFixture<CountryPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
