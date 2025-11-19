use pegawai;

create table asn_audit(
id int auto_increment primary key,
aksi varchar(20),
nip varchar(5),
nama varchar(50),
id_hobi int,
tgl datetime);

create trigger after_nip_ditambah
after insert on asn
for each row
insert into asn_audit
set aksi = 'tambah',
nip = new.nip,
nama = new.nama,
id_hobi = new.id_hobi,
tgl = now();

insert into asn values
('89011','Doraemon',3);
select * from asn_audit;

drop trigger after_nip_ditambah;

-- COMMIT : Tidak bisa di rollback, untuk data yang sudah tetap
-- Mulai transaksi

START TRANSACTION;

-- Tambah hobi
insert into hobi (id, nama_hobi) values
(5, 'Lari');

commit;

rollback;

select * from hobi;

START TRANSACTION;
INSERT INTO hobi (id, nama_hobi) values
(7,'Menulis');

rollback;