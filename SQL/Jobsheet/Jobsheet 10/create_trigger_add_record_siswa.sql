use sekolah;

delimiter $$
create trigger trg_siswa_after_insert
after insert on siswa
for each row
begin
	insert into log_siswa (aksi, nis, nama_baru, tgl)
    values ('insert', new.nis, new.nama, now());
end $$
delimiter ;