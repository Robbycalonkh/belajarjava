import { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer'
    }} 
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }}>
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        height: '200px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {!imageError ? (
          <img 
            src={product.image} 
            alt={product.name}
            onError={() => setImageError(true)}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              transition: 'transform 0.3s'
            }}
          />
        ) : (
          <span style={{ fontSize: '60px' }}>{product.icon}</span>
        )}
      </div>
      <div style={{ padding: '15px' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{product.name}</h3>
        <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>{product.description}</p>
        <p style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold', color: '#2196F3' }}>Rp {product.price.toLocaleString('id-ID')}</p>
        <p style={{ margin: '0 0 15px 0', fontSize: '12px', color: '#ff9800' }}> {product.rating} ({product.reviews} ulasan)</p>
        <button 
          onClick={() => onAddToCart(product)}
          style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
           Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
