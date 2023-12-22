import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-edit-mahasiswa',
  templateUrl: './edit-mahasiswa.component.html',
  styleUrls: ['./edit-mahasiswa.component.css']
})
export class EditMahasiswaComponent {
  editedMahasiswa: any;

  constructor(
    public dialogRef: MatDialogRef<EditMahasiswaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService
  ) {
    this.editedMahasiswa = { ...data.mahasiswa };

  }

  updateMahasiswa() {
    // Melakukan pengecekan sebelum dikirim ke server
    if (this.editedMahasiswa.npm == ""){
      alert("Masukkan Npm")
      return;
    }
    else if (this.editedMahasiswa.nama == ""){
      alert("Masukkan Nama")
      return;
    }
    else if (this.editedMahasiswa.notelp == ""){
      alert("Masukkan Nomor Telpon")
      return;
    }
    else if (this.editedMahasiswa.usia == ""){
      alert("Masukkan Usia")
      return;
    }
    else if (this.editedMahasiswa.jurusan == ""){
      alert("Masukkan Jurusan")
      return;
    }
    else if (this.editedMahasiswa.alamat == ""){
      alert("Masukkan Alamat")
      return;
    }
    else {

    }    
    
    Object.assign(this.data.mahasiswa);
    // Kirim permintaan pembaruan ke server
    this.dataService.editMahasiswa(this.data.mahasiswa).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Mahasiswa berhasil di edit');
        this.dialogRef.close(); 
      },
      (error) => {
        console.error('Error updating Mahasiswa', error);

      }
    );
  }

  cancel() {
    this.dialogRef.close();
  }
}
