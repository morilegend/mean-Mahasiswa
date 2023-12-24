import { Component } from '@angular/core';
import { TambahMahasiswaComponent } from 'src/app/mat/tambah-mahasiswa/tambah-mahasiswa.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  constructor(public dialog: MatDialog) {}

  TambahMahasiswaDialog(): void {
    this.dialog.open(TambahMahasiswaComponent, {
    });
  }
}
