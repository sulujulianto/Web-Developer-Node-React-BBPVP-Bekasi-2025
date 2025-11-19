use sekolah;

create view vw_siswa as
	select nis as 'NIS SISWA', nama as 'Nama Siswa'
    from siswa;