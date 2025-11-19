use sekolah;

delimiter $$
create procedure sp_insert_siswa(
	in m_nis varchar(18),
    in m_nama varchar(11),
    in m_kd_agama int
    )
begin
	start transaction;
    insert into siswa values (m_nis, m_nama, m_kd_agama);
    select * from siswa;
    select * from log_siswa;
    commit;
end $$
delimiter ;