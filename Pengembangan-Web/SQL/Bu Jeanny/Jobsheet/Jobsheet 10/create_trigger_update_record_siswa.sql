use sekolah;

delimiter $$
create trigger trg_siswa_after_update
after update on siswa
for each row
begin
	insert into log_siswa (aksi, nis, nama_lama, nama_baru, tgl)
    values ('update', new.nis, old.nama, new.nama, now());
end $$
delimiter ;