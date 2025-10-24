use sekolah;

delimiter //
create procedure sp_del_siswa(
	in m_nis varchar(18)
    )
begin
	start transaction;
    delete from siswa where nis = m_nis;
    select * from siswa;
end //
delimiter ;