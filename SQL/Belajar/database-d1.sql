-- membuat database
create database pegawai1;

-- untuk memilih database yang ingin digunakan atau diedit
use pegawai1;

-- membuat tabel hobi dan asn
create table hobi(
id int primary key,
nama_hobi varchar(50) not null);

create table asn(
nip char(5) primary key,
nama varchar(50) not null,
id_hobi int,
foreign key(id_hobi) references hobi(id));

-- mengubah nama kolom di dalam tabel (alter)
alter table asn change nama nama_lengkap varchar(50);

-- mengubah nama tabel (rename)
rename table asn to pns;

-- menghapus tabel dan database
drop table pns;

drop database pegawai1;

-- memasukkan data 
insert into hobi values 
(1, 'Memasak'),
(2, 'Olahraga'),
(3, 'Bersepeda'),
(4, 'Membaca');

insert into pns values 
('12345', 'Rose', 1);
insert into pns values 
('23456', 'Jasmine', 2),
('34567', 'Daisy', 3),
('45678', 'Lavender', 4),
('56789', 'Orchid', 4);

-- menampilkan tabel (select)
select * from pns;

select * from hobi;

-- menampilkan beberapa bagian saja 
select nama_lengkap from pns;

select * from pns
where nip in  ('12345','23456'); -- in digunakan untu memilih lebih dari 1 data untuk ditampilkan 

-- mengupdate data 
update pns set nama_lengkap = 'Sun Flower' where nip = '12345';

-- menghapus data dalam tabel
delete from pns where nip = '56789';

