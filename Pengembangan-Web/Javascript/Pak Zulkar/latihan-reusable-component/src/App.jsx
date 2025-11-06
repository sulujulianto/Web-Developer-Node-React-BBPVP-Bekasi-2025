import Button from "./components/Button";
import Card from "./components/Card";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  return (
    <div>
      {/* Section 1 - Button */}
      <section>
        <h1>Latihan Reusable Component - Button</h1>
        <div className="button-group">
          <Button label="Simpan" color="green" onClick={() => alert("Data disimpan!")} />
          <Button label="Hapus" color="red" onClick={() => alert("Data dihapus!")} />
          <Button label="Edit" color="orange" onClick={() => alert("Edit data!")} />
        </div>
      </section>

      {/* Section 2 - Card + Button */}
      <section>
        <h1>Latihan Reusable Component - Card dan Button</h1>
        <div className="card-container">
          <Card title="Produk 1">
            <p>Ini adalah deskripsi produk pertama.</p>
            <Button label="Beli Sekarang" color="blue" onClick={() => alert("Membeli produk 1")} />
          </Card>
          <Card title="Produk 2">
            <p>Produk kedua dengan fitur menarik.</p>
            <Button label="Detail" color="gray" onClick={() => alert("Melihat detail produk 2")} />
          </Card>
        </div>
      </section>

      {/* Section 3 - ProductList */}
      <section>
        <ProductList />
      </section>
    </div>
  );
}

export default App;