import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahMahasiswaComponent } from './tambah-mahasiswa.component';

describe('TambahMahasiswaComponent', () => {
  let component: TambahMahasiswaComponent;
  let fixture: ComponentFixture<TambahMahasiswaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TambahMahasiswaComponent]
    });
    fixture = TestBed.createComponent(TambahMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
