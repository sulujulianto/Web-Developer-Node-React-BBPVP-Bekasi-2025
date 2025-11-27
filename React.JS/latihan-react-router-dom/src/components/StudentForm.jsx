import { useState } from "react";

export default function StudentForm({ onAdd }) {
  const [nama, setNama]   = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat]=useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!nama || !email || !alamat) return;
    onAdd({ id: Date.now(), nama, email, alamat });
    setNama(""); setEmail(""); setAlamat("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h5 className="mb-3">Tambah Data Siswa</h5>
      <div className="mb-3">
        <label className="form-label">Nama</label>
        <input className="form-control" value={nama}
               onChange={e=>setNama(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email}
               onChange={e=>setEmail(e.target.value)} />
      </div>
      <div className="mb-3">
        <label className="form-label">Alamat</label>
        <textarea className="form-control" rows="2" value={alamat}
                  onChange={e=>setAlamat(e.target.value)} />
      </div>
      <button className="btn btn-primary w-100">Tambah</button>
    </form>
  );
}