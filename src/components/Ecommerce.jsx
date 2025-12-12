import { useState } from 'react';
import EcommerceProductCard from './EcommerceProductCard';
import ShoppingCart from './ShoppingCart';

export default function Ecommerce() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const products = [
    { 
      id: 1, 
      name: 'Laptop Gaming ASUS', 
      price: 12000000, 
      description: 'RTX 4060, i7-13th Gen', 
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
      icon: '', 
      category: 'elektronik', 
      rating: 4.8, 
      reviews: 125 
    },
    { 
      id: 2, 
      name: 'Mouse Wireless Logitech', 
      price: 500000, 
      description: 'DPI tinggi, presisi akurat', 
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop',
      icon: '', 
      category: 'aksesori', 
      rating: 4.5, 
      reviews: 89 
    },
    { 
      id: 3, 
      name: 'Keyboard Mekanik RGB', 
      price: 1500000, 
      description: 'Blue Switch, LED backlight', 
      image: 'https://images.unsplash.com/photo-1587829191301-42b351e9d86e?w=400&h=400&fit=crop',
      icon: '', 
      category: 'aksesori', 
      rating: 4.7, 
      reviews: 156 
    },
    { 
      id: 4, 
      name: 'Monitor Ultrawide 4K', 
      price: 3000000, 
      description: '34\" Gaming monitor', 
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
      icon: '', 
      category: 'elektronik', 
      rating: 4.6, 
      reviews: 94 
    },
    { 
      id: 5, 
      name: 'Headset Gaming SteelSeries', 
      price: 800000, 
      description: '7.1 Surround sound', 
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      icon: '', 
      category: 'aksesori', 
      rating: 4.4, 
      reviews: 120 
    },
    { 
      id: 6, 
      name: 'SSD NVMe 1TB', 
      price: 1200000, 
      description: 'Read 7000MB/s ultra cepat', 
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop',
      icon: '', 
      category: 'storage', 
      rating: 4.9, 
      reviews: 210 
    },
    { 
      id: 7, 
      name: 'RAM DDR4 16GB', 
      price: 900000, 
      description: '3600MHz Gaming RGB', 
      image: 'https://images.unsplash.com/photo-1591290621225-4ba02a153e97?w=400&h=400&fit=crop',
      icon: '', 
      category: 'hardware', 
      rating: 4.7, 
      reviews: 167 
    },
    { 
      id: 8, 
      name: 'CPU Cooler RGB', 
      price: 350000, 
      description: 'Liquid cooling system', 
      image: 'https://images.unsplash.com/photo-1587829191301-42b351e9d86e?w=400&h=400&fit=crop',
      icon: '', 
      category: 'hardware', 
      rating: 4.3, 
      reviews: 78 
    }
  ];

  const categories = ['all', 'elektronik', 'aksesori', 'storage', 'hardware'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    alert(' ' + product.name + ' ditambahkan ke keranjang!');
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Keranjang masih kosong!');
      return;
    }
    setShowCheckout(true);
  };

  const completeOrder = () => {
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(' Pesanan Anda berhasil! Total: Rp ' + totalPrice.toLocaleString('id-ID') + '\\n\\nTerimakasih telah berbelanja!');
    setCartItems([]);
    setShowCheckout(false);
    setOrderCompleted(true);
    setTimeout(() => setOrderCompleted(false), 3000);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', color: '#333', margin: '0 0 10px 0' }}> Toko Online Gaming</h1>
        <p style={{ color: '#666', margin: '0' }}>Belanja produk elektronik dan aksesori gaming terbaik dengan harga terjangkau</p>
      </div>

      {orderCompleted && (
        <div style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '15px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
           Pesanan berhasil diproses!
        </div>
      )}

      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '12px',
            marginRight: '10px',
            borderRadius: '8px',
            border: '2px solid #ddd',
            fontSize: '16px'
          }}
        />
      </div>

      <div style={{ marginBottom: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilterCategory(category)}
            style={{
              padding: '10px 20px',
              backgroundColor: filterCategory === category ? '#2196F3' : '#e0e0e0',
              color: filterCategory === category ? 'white' : '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s'
            }}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
          <p style={{ fontSize: '18px' }}>Produk tidak ditemukan</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {filteredProducts.map(product => (
            <EcommerceProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      )}

      <ShoppingCart
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        onCheckout={handleCheckout}
      />

      {showCheckout && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 102
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '12px',
            maxWidth: '500px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
          }}>
            <h2 style={{ marginTop: 0 }}>Konfirmasi Pesanan</h2>
            <p>Silahkan masukkan data pengiriman:</p>

            <input type="text" placeholder="Nama Lengkap" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
            <input type="text" placeholder="Nomor Telepon" style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
            <input type="text" placeholder="Alamat Pengiriman" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ddd' }} />

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setShowCheckout(false)}
                style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: '#ccc',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                Batal
              </button>
              <button
                onClick={completeOrder}
                style={{
                  flex: 1,
                  padding: '10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}>
                Selesaikan Pesanan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
