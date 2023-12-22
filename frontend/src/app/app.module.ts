import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Routing Component
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MahasiswaListComponent } from './component/mahasiswa-list/mahasiswa-list.component';
import { TambahMahasiswaComponent } from './mat/tambah-mahasiswa/tambah-mahasiswa.component';
import { ViewMahasiswaComponent } from './mat/view-mahasiswa/view-mahasiswa.component';


//Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

//Prov
import { DataService } from './data.service';
import { EditMahasiswaComponent } from './mat/edit-mahasiswa/edit-mahasiswa.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MahasiswaListComponent,
    TambahMahasiswaComponent,
    ViewMahasiswaComponent,
    EditMahasiswaComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
