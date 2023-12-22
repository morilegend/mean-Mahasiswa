import { Component } from '@angular/core';
import { TambahMahasiswaComponent } from 'src/app/mat/tambah-mahasiswa/tambah-mahasiswa.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../data.service';
import { ViewMahasiswaComponent } from 'src/app/mat/view-mahasiswa/view-mahasiswa.component';
import { EditMahasiswaComponent } from 'src/app/mat/edit-mahasiswa/edit-mahasiswa.component';

@Component({
  selector: 'app-mahasiswa-list',
  templateUrl: './mahasiswa-list.component.html',
  styleUrls: ['./mahasiswa-list.component.css']
})
export class MahasiswaListComponent {
  mahasiswaList: any[] = [];

  constructor(public dialog: MatDialog,private dataService:DataService) {}

  TambahMahasiswaDialog() {
    this.dialog.open(TambahMahasiswaComponent, {
    });
  }

  viewMahasiswaDialog(mahasiswa: any) {
    this.dialog.open(ViewMahasiswaComponent, {
      data: { mahasiswa },
    });
  }
  
  ngOnInit() {
    this.dataService.getMahasiswaList().subscribe(
      (data) => {
        this.mahasiswaList = data.data;
      }
    );
  }

  deleteMahasiswa(id: string) {
    this.dataService.deleteMahasiswa(id).subscribe(
      () => {
        this.dataService.getMahasiswaList();
      }
    );
  }

  editMahasiswaDialog(mahasiswa: any) {
    const dialogRef = this.dialog.open(EditMahasiswaComponent, {
      data: { mahasiswa },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update MahasiswaList if needed
        this.dataService.getMahasiswaList();
      }
    });
  }
}