import { Component } from '@angular/core';
import { TambahMahasiswaComponent } from 'src/app/mat/tambah-mahasiswa/tambah-mahasiswa.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  constructor(public dialog: MatDialog, private dataService : DataService) {}
  historyList: any[] = [];

  TambahMahasiswaDialog(): void {
    this.dialog.open(TambahMahasiswaComponent, {
    });
  }

  ngOnInit() {
    this.dataService.getHistory().subscribe(
      (data) => {
        this.historyList = data.data;
      }
    );
  }
}
