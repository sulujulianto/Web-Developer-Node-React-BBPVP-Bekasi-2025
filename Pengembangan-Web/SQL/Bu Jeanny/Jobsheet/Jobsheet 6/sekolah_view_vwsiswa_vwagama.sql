use sekolah;

create view vw_siswa as
	select * from siswa;
    
create view vw_agama as
	select * from agama;
    
create view vw_jml_agama_siswa as
	select vw_agama.nama as Nama,
		count(vw_agama.nama) as Jumlah
	from vw_siswa, vw_agama
    where vw_agama.kode = vw_siswa.kd_agama
    group by vw_agama.kode;