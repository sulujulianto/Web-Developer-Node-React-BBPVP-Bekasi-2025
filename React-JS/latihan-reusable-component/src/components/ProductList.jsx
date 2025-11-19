import Button from "./Button";
import kemejaImage from "../assets/kemeja-biru.jpg";
import sepatuImage from "../assets/sepatu-sneakers.jpg";
import tasImage from "../assets/tas-ransel.jpg";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Kemeja Polos",
      price: 120000,
      badge: "Baru",
      color: "■#22c55e",
      image: kemejaImage, 
    },
    {
      id: 2,
      name: "Sepatu Sneakers",
      price: 450000,
      badge: "Promo",
      color: "■#eab308",
      image: sepatuImage,
    },
    {
      id: 3,
      name: "Tas Ransel",
      price: 280000,
      badge: "Limited",
      color: "■#ef4444",
      image: tasImage,
    }
  ];

  const formatRupiah = (n) =>
    new Intl.NumberFormat("id-ID", { 
      style: "currency", 
      currency: "IDR", 
      minimumFractionDigits: 0 
    }).format(n);

  return (
    <div>
      <h2>Daftar Produk</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            {/* Product Image */}
            {p.image ? (
              <img 
                src={p.image} 
                alt={p.name}
                className="product-image"
              />
            ) : (
              <div className="product-image"></div>
            )}
            
            {/* Product Name */}
            <div className="product-name">{p.name}</div>
            
            {/* Product Price */}
            <div className="product-price">{formatRupiah(p.price)}</div>
            
            {/* Product Badge */}
            <span 
              className="product-badge"
              style={{ backgroundColor: p.color }}
            >
              {p.badge}
            </span>
            
            {/* Buy Button */}
            <div>
              <Button 
                label="Beli" 
                color="blue" 
                onClick={() => alert(`Membeli ${p.name}`)} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;