export default function RenderList() {
  const names = ['Robby', 'Ferliansyah', 'Belajar JavaScript'];

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>3. Render List dari Array</h2>
      <ul style={{ fontSize: '18px' }}>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
