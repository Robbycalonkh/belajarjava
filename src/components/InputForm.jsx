import { useState } from 'react';

export default function InputForm() {
  const [input, setInput] = useState('');

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>2. Input Form Sederhana</h2>
      <input
        type="text"
        placeholder="Ketik sesuatu..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '10px', fontSize: '16px', width: '100%', maxWidth: '300px', marginBottom: '10px' }}
      />
      <p style={{ fontSize: '18px' }}>Isi Input: <strong>{input}</strong></p>
    </div>
  );
}
