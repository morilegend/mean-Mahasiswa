import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMahasiswaComponent } from './edit-mahasiswa.component';

describe('EditMahasiswaComponent', () => {
  let component: EditMahasiswaComponent;
  let fixture: ComponentFixture<EditMahasiswaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMahasiswaComponent]
    });
    fixture = TestBed.createComponent(EditMahasiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
