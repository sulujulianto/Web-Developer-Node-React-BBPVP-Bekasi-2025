import { useState, useEffect } from "react";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

export default function Home() {
  const [students, setStudents] = useState([]);

  // baca localStorage saat mount
  useEffect(()=>{
    const raw = localStorage.getItem("students");
    if (raw) setStudents(JSON.parse(raw));
  }, []);

  // simpan ke localStorage setiap students berubah
  useEffect(()=>{
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent  = st => setStudents(prev=>[st, ...prev]);
  const deleteStudent=id=>setStudents(prev=>prev.filter(x=>x.id!==id));

  return (
    <>
      <h2 className="text-center mb-4">Aplikasi Data Siswa</h2>
      <StudentForm onAdd={addStudent} />
      <StudentTable students={students} onDelete={deleteStudent} />
    </>
  );
}