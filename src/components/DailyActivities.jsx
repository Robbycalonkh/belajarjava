import { useState } from 'react';

export default function DailyActivities() {
  const [activities, setActivities] = useState([]);
  const [input, setInput] = useState('');

  const addActivity = () => {
    if (input.trim() !== '') {
      setActivities([...activities, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  const deleteActivity = (id) => {
    setActivities(activities.filter(activity => activity.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addActivity();
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', backgroundColor: '#f9f9f9' }}>
      <h2> Keseharian Saya</h2>
      
      <div style={{ marginBottom: '15px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Tambahkan aktivitas baru..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ padding: '10px', fontSize: '16px', flex: 1, borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={addActivity}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Tambah
        </button>
      </div>

      {activities.length === 0 ? (
        <p style={{ color: '#999', fontStyle: 'italic' }}>Belum ada aktivitas. Mulai tambahkan aktivitas Anda! </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {activities.map((activity, index) => (
            <li 
              key={activity.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                marginBottom: '8px',
                backgroundColor: 'white',
                border: '1px solid #eee',
                borderRadius: '4px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}
            >
              <span style={{ fontSize: '16px', color: '#333' }}>
                <strong>{index + 1}.</strong> {activity.text}
              </span>
              <button
                onClick={() => deleteActivity(activity.id)}
                style={{
                  padding: '5px 15px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  backgroundColor: '#ff5252',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px'
                }}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}

      {activities.length > 0 && (
        <p style={{ marginTop: '15px', color: '#666', fontSize: '14px' }}>
          Total aktivitas: <strong>{activities.length}</strong>
        </p>
      )}
    </div>
  );
}
