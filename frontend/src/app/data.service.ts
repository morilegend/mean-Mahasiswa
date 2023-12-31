import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/mahasiswa';
  private apiUrlHistory = 'http://localhost:3000/history';

  constructor(private http: HttpClient, private router : Router) {}

  //Mahasiswa
  getMahasiswaList(){
    return this.http.get<any>(this.apiUrl);
  }

  deleteMahasiswa(id: string){
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  editMahasiswa(editedMahasiswa: any){
    const url = `${this.apiUrl}/update/${editedMahasiswa._id}`;
    return this.http.put(url, editedMahasiswa);
  }
  
  insertMahasiswa(insertMahasiswa: any){
    const url = `${this.apiUrl}/insert`;
    return this.http.post(url, insertMahasiswa);
  }

  //History
  getHistory(){
    return this.http.get<any>(this.apiUrlHistory);
  }

  insertHistory(insertHistory: any){
    const url = `${this.apiUrlHistory}/insert`;
    return this.http.post(url, insertHistory);
  }

}