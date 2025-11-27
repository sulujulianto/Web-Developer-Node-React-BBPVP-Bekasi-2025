export default function StudentTable({ students, onDelete }) {
  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>Nama</th>
          <th>Email</th>
          <th>Alamat</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="4" className="text-center text-muted">
              Belum ada data siswa
            </td>
          </tr>
        ) : (
          students.map(s=>(
            <tr key={s.id}>
              <td>{s.nama}</td>
              <td>{s.email}</td>
              <td>{s.alamat}</td>
              <td>
                <button className="btn btn-danger btn-sm"
                        onClick={()=>onDelete(s.id)}>Hapus</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}