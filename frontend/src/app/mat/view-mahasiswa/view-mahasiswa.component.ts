import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-mahasiswa',
  templateUrl: './view-mahasiswa.component.html',
  styleUrls: ['./view-mahasiswa.component.css']
})
export class ViewMahasiswaComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { mahasiswa: any },public dialogRef: MatDialogRef<ViewMahasiswaComponent>,public dataService: DataService
    ){}
  batal() {
    // tutup dialog
    this.dialogRef.close();
  }

  close(event: Event) {
    // Cegah penutupan dialog
    event.preventDefault();
  }
}

