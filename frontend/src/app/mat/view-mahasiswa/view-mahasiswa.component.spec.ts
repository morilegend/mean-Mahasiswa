import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMahasiswaComponent } from './view-mahasiswa.component';

describe('ViewMahasiswaComponent', () => {
  let component: ViewMahasiswaComponent;
  let fixture: ComponentFixture<ViewMahasiswaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMahasiswaComponent]
    });
    fixture = TestBed.createComponent(ViewMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
