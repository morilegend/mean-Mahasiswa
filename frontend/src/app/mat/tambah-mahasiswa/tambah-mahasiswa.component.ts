import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tambah-mahasiswa',
  templateUrl: './tambah-mahasiswa.component.html',
  styleUrls: ['./tambah-mahasiswa.component.css']
})

export class TambahMahasiswaComponent {

  // Deklarasi
  npm: string = "";
  nama: string = "";
  notelp: string = "";
  usia: string = "";
  jurusan: string = "";
  alamat : string = "";

  constructor(public dialogRef: MatDialogRef<TambahMahasiswaComponent>, private http: HttpClient,private dataService : DataService) { }
  simpanMahasiswa() {
    // Data yang akan dikirim
    let bodyData = {
      "npm": this.npm,
      "nama": this.nama,
      "notelp": this.notelp,
      "usia": this.usia,
      "jurusan": this.jurusan,
      "alamat" : this.alamat,
    };

    // Lakukan Pengecekan Data
    if (this.npm == "" && this.nama == "" && this.notelp == "" && this.usia == "" && this.jurusan == ""){
      alert("Silakhan Mengisi Form")
      return;
    }
    else if(this.npm == ""){
      alert("Npm Tidak Boleh Kosong")
      return;
    }
    else if(this.nama == ""){
      alert("Nama Tidak Boleh Kosong")
      return;
    }
    else if(this.notelp == null){
      alert("No Telp Tidak Boleh Kosong")
      return;
    }
    else if(this.usia == ""){
      alert("Usia tidak boleh kosong ")
      return;
    }
    else if(this.jurusan == ""){
      alert("Jurusan Tidak Boleh Kosong")
      return;
    }
    else{}

    // Kirim data ke server
    this.dataService.insertMahasiswa(bodyData).subscribe(() => {
      alert("Mahasiswa berhasil disimpan");
      this.npm = "";
      this.nama = "";
      this.notelp = "";
      this.usia = "";
      this.jurusan = "";
      this.alamat = "";
      // Saat Data berhasil disimpan refresh website
      window.location.reload();
    },

    (error) => {
      console.error(error);
      alert("Gagal menyimpan mahasiswa");
    }
  );
}

  batal() {
    // tutup dialog
    this.dialogRef.close();
  }

  close(event: Event) {
    // Cegah penutupan dialog
    event.preventDefault();
  }
}