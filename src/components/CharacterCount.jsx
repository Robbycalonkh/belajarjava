import { useState } from 'react';

export default function CharacterCount() {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>8. Hitung Panjang Input</h2>
      <input
        type="text"
        placeholder="Ketik teks di sini..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '100%', maxWidth: '300px', marginBottom: '10px', display: 'block' }}
      />
      <p style={{ fontSize: '18px' }}>Jumlah karakter: <strong>{text.length}</strong></p>
    </div>
  );
}
