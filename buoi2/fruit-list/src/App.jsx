function App() {
  const fruits = ['Táo', 'Chuối', 'Cam', 'Xoài'];

  return (
    <div>
      <h1>Danh sách các loại quả</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
