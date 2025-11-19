use sekolah;

create view vw_asn_jns_kelamin as
	select nis, nama,
		if(mid(nis, 7, 1) = '1',
			'Laki-Laki', 'Perempuan') as jenKel
	from siswa;