use sekolah;

create table log_siswa (
	id_log int auto_increment primary key,
    nis varchar(10),
    nama_lama varchar(50),
    nama_baru varchar(50),
    aksi varchar(20),
    tgl datetime
);