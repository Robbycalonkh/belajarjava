import { useState } from 'react';

export default function BackgroundColor() {
  const [bgColor, setBgColor] = useState('lightblue');
  const colors = ['lightblue', 'lightgreen', 'lightyellow', 'lightcoral', 'lightpink', 'lightgray'];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', backgroundColor: bgColor, transition: 'background-color 0.3s' }}>
      <h2>7. Mengubah Warna Background</h2>
      <p style={{ fontSize: '16px' }}>Warna saat ini: <strong>{bgColor}</strong></p>
      <button 
        onClick={changeColor}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#FF9800', color: 'white', border: 'none', borderRadius: '4px' }}
      >
        Ubah Warna Background
      </button>
    </div>
  );
}
