create database toko;
use toko;

-- buat tabel pelanggan 
create table pelanggan (
id int primary key,
nama varchar(50) not null);

-- buat tabel transaksi
create table transaksi (
id int primary key,
id_pelanggan int,
produk varchar(50) not null);

insert into pelanggan values 
(1, 'Andi'),
(2, 'Budi'),
(3, 'Citra');

insert into transaksi values
(1, 1, 'Laptop'),
(2, 1, 'HP'),
(3, 4, 'Kamera');

-- inner join 
select pelanggan.id, pelanggan.nama, transaksi.produk
from pelanggan 
join transaksi 
on pelanggan.id = transaksi.id_pelanggan;

-- left join 
select p.nama, t.produk
from pelanggan p
left join transaksi t 
on p.id = t.id_pelanggan;

-- cross join 
select p.id, p.nama, t.id, t.produk
from pelanggan p 
cross join transaksi t;
