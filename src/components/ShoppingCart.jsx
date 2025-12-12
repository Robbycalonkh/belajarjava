import { useState } from 'react';

export default function ShoppingCart({ cartItems, onRemoveFromCart, onCheckout }) {
  const [showCart, setShowCart] = useState(false);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      onRemoveFromCart(productId);
    } else {
      const updatedCart = cartItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      // Update cart in parent component
      window.updateCart && window.updateCart(updatedCart);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowCart(!showCart)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '12px 20px',
          backgroundColor: '#FF6B6B',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          zIndex: '100'
        }}>
         Keranjang ({totalItems})
      </button>

      {showCart && (
        <div style={{
          position: 'fixed',
          top: '0',
          right: '0',
          width: '400px',
          height: '100vh',
          backgroundColor: 'white',
          boxShadow: '-2px 0 10px rgba(0,0,0,0.2)',
          overflow: 'auto',
          zIndex: '101',
          padding: '20px'
        }}>
          <button 
            onClick={() => setShowCart(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer'
            }}>
            
          </button>

          <h2 style={{ marginTop: '20px', marginBottom: '20px' }}>Keranjang Belanja</h2>

          {cartItems.length === 0 ? (
            <p style={{ color: '#999', textAlign: 'center', marginTop: '40px' }}>Keranjang masih kosong</p>
          ) : (
            <>
              {cartItems.map(item => (
                <div key={item.id} style={{
                  padding: '15px',
                  borderBottom: '1px solid #eee',
                  marginBottom: '10px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                      <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>
                        Rp {item.price.toLocaleString('id-ID')}
                      </p>
                    </div>
                    <button 
                      onClick={() => onRemoveFromCart(item.id)}
                      style={{
                        background: '#ff5252',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        cursor: 'pointer',
                        fontSize: '12px'
                      }}>
                      Hapus
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: '#e0e0e0',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}>
                      
                    </button>
                    <span style={{ minWidth: '30px', textAlign: 'center' }}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        padding: '4px 8px',
                        backgroundColor: '#e0e0e0',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}>
                      +
                    </button>
                    <span style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: '20px',
                paddingTop: '15px',
                borderTop: '2px solid #333'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '18px', fontWeight: 'bold' }}>
                  <span>Total:</span>
                  <span style={{ color: '#4CAF50' }}>Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
                <button 
                  onClick={onCheckout}
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}>
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
