use sekolah;

alter table siswa
	add column kd_agama int,
	add constraint kd_agama_siswa_kode
		foreign key(kd_agama)
        references agama(kode);