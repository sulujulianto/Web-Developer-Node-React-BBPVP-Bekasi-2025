-- 1. Membuat database Latihan_1
CREATE DATABASE Latihan_1;
USE Latihan_1;

-- 2. Membuat tabel-tabel berdasarkan deskripsi

-- Tabel Karyawan (dibuat duluan karena direferensi oleh tabel Peminjaman)
CREATE TABLE Karyawan(
    NIK CHAR(18) PRIMARY KEY,
    Nama_Karyawan VARCHAR(30) NOT NULL,
    Alamat_Karyawan VARCHAR(30) NOT NULL,
    NoHp_Karyawan VARCHAR(15) NOT NULL,
    Jabatan VARCHAR(25) NOT NULL
);

-- Tabel Mahasiswa (dibuat duluan karena direferensi oleh tabel Peminjaman)
CREATE TABLE Mahasiswa(
    NIM CHAR(8) PRIMARY KEY,
    Nama_Mhs VARCHAR(30) NOT NULL,
    Alamat_Mhs VARCHAR(30) NOT NULL,
    NoHp_Mhs VARCHAR(15) NOT NULL
);

-- Tabel Buku (dibuat duluan karena direferensi oleh tabel Peminjaman dan Pengembalian)
CREATE TABLE Buku(
    Kode_Buku CHAR(4) PRIMARY KEY,
    Judul_Buku VARCHAR(30) NOT NULL,
    Pengarang VARCHAR(20) NOT NULL,
    Penerbit VARCHAR(20) NOT NULL
);

-- Tabel Peminjaman (dibuat setelah Karyawan, Mahasiswa, dan Buku)
CREATE TABLE Peminjaman(
    Kode_Pinjam CHAR(4) PRIMARY KEY,
    NIK CHAR(18),
    NIM CHAR(8),
    Tgl_Pinjam DATE NOT NULL,
    FOREIGN KEY(NIK) REFERENCES Karyawan(NIK),
    FOREIGN KEY(NIM) REFERENCES Mahasiswa(NIM)
);

-- Tabel Pengembalian (dibuat terakhir karena mereferensi Peminjaman dan Buku)
CREATE TABLE Pengembalian(
    Kode_Pinjam CHAR(4),
    Kode_Buku CHAR(4),
    Tgl_Kembali DATE NOT NULL,
    Denda NUMERIC(9,0) NOT NULL,
    PRIMARY KEY(Kode_Pinjam, Kode_Buku),
    FOREIGN KEY(Kode_Pinjam) REFERENCES Peminjaman(Kode_Pinjam),
    FOREIGN KEY(Kode_Buku) REFERENCES Buku(Kode_Buku)
);