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

    let tanggal = new Date
    let date = tanggal.getDate()+"-"+ tanggal.getMonth()+"-"+ tanggal.getFullYear()
    let time = tanggal.getHours()+":"+ tanggal.getMinutes()+":"+ tanggal.getSeconds()

    // Data yang akan dikirim

    let bodyData = {
      "npm": this.npm,
      "nama": this.nama,
      "notelp": this.notelp,
      "usia": this.usia,
      "jurusan": this.jurusan,
      "alamat" : this.alamat,
    };

    let bodyData2 = {
      "npm": bodyData.npm,
      "nama": bodyData.nama,
      // Ganti Tanggal Menjadi Format dd/mm/yy
      "tanggal": `${date}:${time}`,
      "status": "Insert"
    };



    //Pengeceka Form
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
    else if(this.notelp == ""){
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
    this.dataService.insertMahasiswa(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Mahasiswa berhasil disimpan");
      this.npm = "";
      this.nama = "";
      this.notelp = "";
      this.usia = "";
      this.jurusan = "";
      this.alamat = "";

    this.dataService.insertHistory(bodyData2).subscribe((resultData2: any) => {
      console.log(resultData2);
    })
      // Saat Data berhasil disimpan refresh website
      window.location.reload();
    },

    (error) => {
      console.error(error);
      alert("No Telpon Hanya Boleh Angka");
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
