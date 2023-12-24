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
  

  updateMahasiswa(event: Event) {

    let tanggal = new Date
    let date = tanggal.getDate()+"-"+ tanggal.getMonth()+"-"+ tanggal.getFullYear()
    let time = tanggal.getHours()+":"+ tanggal.getMinutes()+":"+ tanggal.getSeconds()

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
    else {

    } 

    //Kirim Data Edit
    let bodyData = {
      "npm": this.editedMahasiswa.npm,
      "nama": this.editedMahasiswa.nama,

      // Ganti Tanggal Menjadi Format dd/mm/yy
      "tanggal":`${date}:${time}`,
      "status": "Update"
    };
    // Kirim data ke server History
    this.dataService.insertHistory(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
    })

    // Perbarui nilai properti objek data.mahasiswa
    Object.assign(this.data.mahasiswa, this.editedMahasiswa);
    // Kirim  pembaruan ke mongo
    this.dataService.editMahasiswa(this.data.mahasiswa).subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Mahasiswa berhasil di edit');
        this.dialogRef.close(); 
      },
      (error) => {
        console.error('Gagal update Mahasiswa', error);

      }
    );
  }

  cancel() {
    this.dialogRef.close();
  }
}
