function ProductCard({ title, price, description }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      maxWidth: '300px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      marginRight: '15px'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>{title}</h3>
      <p style={{ margin: '0 0 10px 0', color: '#666' }}>{description}</p>
      <p style={{ margin: '0', fontSize: '20px', fontWeight: 'bold', color: '#2196F3' }}>Rp {price.toLocaleString('id-ID')}</p>
    </div>
  );
}

export default function ProductCardDemo() {
  const products = [
    { id: 1, title: 'Laptop', price: 10000000, description: 'Laptop gaming berkinerja tinggi' },
    { id: 2, title: 'Mouse', price: 500000, description: 'Mouse wireless premium' },
    { id: 3, title: 'Keyboard', price: 1500000, description: 'Keyboard mechanical RGB' }
  ];

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>6. Komponen Kartu Produk</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
