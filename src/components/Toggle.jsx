import { useState } from 'react';

export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>4. Toggle Show/Hide</h2>
      <button 
        onClick={() => setIsVisible(!isVisible)}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', marginBottom: '10px' }}
      >
        {isVisible ? 'Sembunyikan' : 'Tampilkan'}
      </button>
      {isVisible && (
        <p style={{ fontSize: '18px', color: '#333' }}>Teks ini bisa ditampilkan atau disembunyikan!</p>
      )}
    </div>
  );
}
