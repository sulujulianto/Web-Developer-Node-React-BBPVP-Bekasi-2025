use sekolah;

delimiter $$
create function fn_info_siswa(p_nis varchar(10))
returns varchar(100)
deterministic

begin
	declare v_nama_siswa varchar(50);
    declare v_nama_agama varchar(50);
    
    select s.nama, a.nama
    into v_nama_siswa, v_nama_agama
    from siswa s
    join agama a on s.kd_agama = a.kode
    where s.nis = p_nis;
    return concat(v_nama_siswa, ' - ', v_nama_agama);
end $$
delimiter ;