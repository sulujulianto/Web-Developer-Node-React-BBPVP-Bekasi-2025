-- Membuat database
CREATE DATABASE Latihan_2;
USE Latihan_2;

-- Tabel Karyawan
CREATE TABLE Karyawan(
    NIK CHAR(18) PRIMARY KEY,
    Nama_Karyawan VARCHAR(30) NOT NULL,
    Alamat_Karyawan VARCHAR(30) NOT NULL,
    NoHP_Karyawan VARCHAR(15) NOT NULL,
    Jabatan VARCHAR(25) NOT NULL
);

-- Tabel Mahasiswa
CREATE TABLE Mahasiswa(
    NIM CHAR(8) PRIMARY KEY,
    Nama_Mahasiswa VARCHAR(30) NOT NULL,
    Alamat_Mahasiswa VARCHAR(30) NOT NULL,
    NoHP_Mahasiswa VARCHAR(15) NOT NULL
);

-- Tabel Buku
CREATE TABLE Buku(
    Kode_Buku CHAR(4) PRIMARY KEY,
    Judul_Buku VARCHAR(30) NOT NULL,
    Pengarang VARCHAR(20) NOT NULL,
    Penerbit VARCHAR(20) NOT NULL
);

-- Tabel Peminjaman
CREATE TABLE Peminjaman(
    Kode_Pinjam CHAR(4) PRIMARY KEY,
    NIK CHAR(18),
    NIM CHAR(8),
    Kode_Buku CHAR(4),
    Tgl_Pinjam DATE NOT NULL,
    FOREIGN KEY(NIK) REFERENCES Karyawan(NIK),
    FOREIGN KEY(NIM) REFERENCES Mahasiswa(NIM),
    FOREIGN KEY(Kode_Buku) REFERENCES Buku(Kode_Buku)
);

-- Tabel Pengembalian
CREATE TABLE Pengembalian(
    Kode_Pinjam CHAR(4),
    Kode_Buku CHAR(4),
    Tgl_Kembali DATE NOT NULL,
    Denda NUMERIC(9,0) NOT NULL,
    PRIMARY KEY(Kode_Pinjam, Kode_Buku),
    FOREIGN KEY(Kode_Pinjam) REFERENCES Peminjaman(Kode_Pinjam),
    FOREIGN KEY(Kode_Buku) REFERENCES Buku(Kode_Buku)
);