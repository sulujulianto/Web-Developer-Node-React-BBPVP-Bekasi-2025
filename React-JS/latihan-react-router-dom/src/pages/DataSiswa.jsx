import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'bootstrap/dist/js/bootstrap.min'

export default function DataSiswa() {
    // deklarasi nilai awal students : array kosong
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    // nilai awal dari field-field di dalam students
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [alamat, setAlamat] = useState("");
    const navigate = useNavigate();

    // useEffect digunakan untuk memanggil fungsi fetchData() hanya sekali
    // saat komponen pertama kali dimuat (mounted)
    useEffect(() => {
        fetchData();
    }, []); // [] artinya hanya dijalankan sekali saat render pertama

    // fungsi untuk mengambil data dari API menggunakan axios (metode GET)
    const fetchData = () => {
        axios.get('https://mytechs.my.id/data_siswa_api/apiSiswa.php') // endpoint API
            .then(response => {
                // kalau berhasi apa yg dilakukan
                setStudents(response.data); // masukin data dari API ke state students(array) | state: wadah
                console.log('response data: ', response.data); // tampilkan data di console
                // console.log('response: ', response); // liat response
            })
            .catch(error => {
                // kalau gagal apa yg dilakukan
            })
            .finally(() => {
                setLoading(false);
            })
    }

    // Fungsi handleSubmit akan dipanggil saat form disubmit
    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah perilaku default form (agar halaman tidak reload otomatis)

        // Mengirim data ke API menggunakan metode POST via Axios
        axios.post('https://mytechs.my.id/data_siswa_api/apiSiswa.php', {
            // Data yang dikirim ke server (sesuai struktur yang diharapkan API)
            nama_siswa: nama,     // ambil dari state "nama"
            email_siswa: email,   // ambil dari state "email"
            alamat_siswa: alamat  // ambil dari state "alamat"
        })
            // Jika permintaan berhasil (status 200)
            .then(response => {
                setNama(""); // Kosongkan kembali input setelah berhasil dikirim
                setEmail("");
                setAlamat("");

                // Tampilkan respon dari server di console (untuk debugging)
                console.log(response);
                fetchData();
            })
            // .catch untuk menangani error
            .catch(error => {
                console.error("Gagal menyimpan data:", error);
                alert("Gagal menyimpan data" + error.message)
            })
            .finally(() => {
                // Bagian ini dijalankan setelah proses selesai
                // tutup modal
            })
    }


    // Fungsi untuk menghapus data siswa berdasarkan id
    const handleDelete = (id) => {
        // Tampilkan pop-up konfirmasi sebelum menghapus data
        const confirmDelete = window.confirm(
            "Apakah kamu yakin akan menghapus data ini?"
        );

        // Jika user klik "Cancel", hentikan fungsi (tidak jadi hapus)
        if (!confirmDelete) return;

        // Jika user klik "OK", lanjut hapus data ke server menggunakan axios.delete()
        axios.delete(`https://mytechs.my.id/data_siswa_api/apiSiswa.php?id=${id}`)  // Kirim request DELETE ke API dengan id siswa yang dipilih
            .then(response => {
                fetchData(); // Jika berhasil, panggil ulang fetchData() untuk memperbarui tabel
            })
            .catch(error => {
                // Jika terjadi error (misal server tidak merespons)
                console.error("Gagal menghapus data:" + error);
                alert("Terjadi kesalahan saat menghapus data");
            })
            .finally(() => {
                // Bagian ini dijalankan setelah proses selesai (berhasil/gagal)
                console.log("Proses hapus data selesai.");
            })
    }

    const handleEdit = () => {

    }


    return (
        <>
            <div className="container">
                <div className="card mt-2">
                    <div className="card-body">
                        {/* tombol modal */}
                        <button type="button" className="btn btn-primary col-12" data-bs-toggle="modal" data-bs-target="#TambahSiwaModal">
                            Tambah Siswa
                        </button>

                        <hr />

                        <table className="table table-bordered table-striped">
                            <thead className="table-dark text-center">
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col'>Nama</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Alamat</th>
                                    <th scope='col'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center text-muted"> 
                                            Belum ada data siswa
                                        </td>
                                    </tr>
                                ) : (
                                    students.map((student, index) => (
                                        <tr key={index}>
                                            <td className='text-center'>{index + 1}</td>
                                            <td>{student.nama_siswa}</td>
                                            <td>{student.email_siswa}</td>
                                            <td>{student.alamat_siswa}</td>
                                            <td>
                                                <div className='row justify-content-evenly'>
                                                    <button
                                                        className="btn btn-warning btn-sm col-4"
                                                        onClick={() => handleEdit(student.id_siswa)} // panggil handleEdit dengan id siswa dari students.map()
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-danger btn-sm col-4"
                                                        onClick={() => handleDelete(student.id_siswa)}  // panggil handleDelete dengan id siswa dari students.map()
                                                    > 
                                                        Hapus
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* modal untuk pop-up form tambah siswa */}
            <div className="modal fade" id="TambahSiwaModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="TambahSiwaLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="TambahSiwaLabel">Tambah Siswa</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                {/* cari di bootstrap floating label */}
                                <div className="form-floating mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingNama"
                                        placeholder='Nama...'
                                        value={nama}
                                        onChange={(e) => setNama(e.target.value)}
                                    />
                                    <label htmlFor="floatingNama">Nama</label>
                                </div>
                                <div className="form-floating mb-1">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingEmail"
                                        placeholder="Email..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingEmail">Email</label>
                                </div>
                                <div className="form-floating mb-2">
                                    <textarea
                                        className="form-control"
                                        id="floatingAlamat"
                                        placeholder="Alamat Siswa"
                                        style={{ height: "100px" }}
                                        value={alamat}
                                        onChange={(e) => setAlamat(e.target.value)}
                                    ></textarea>
                                    <label htmlFor="floatingAlamat">Alamat</label>
                                </div>

                                <button className="btn btn-primary col-12">
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
