import { useState } from 'react';

export default function EmailValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email.trim() === '') {
      setError('Email tidak boleh kosong');
      setSubmitted(false);
    } else {
      setError('');
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>9. Validasi Form Sederhana</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Masukkan email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', fontSize: '16px', width: '100%', maxWidth: '300px', marginBottom: '10px', display: 'block' }}
        />
        <button 
          type="submit"
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#9C27B0', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Submit
        </button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      {submitted && <p style={{ color: 'green', marginTop: '10px' }}>Email berhasil dikirim!</p>}
    </div>
  );
}
