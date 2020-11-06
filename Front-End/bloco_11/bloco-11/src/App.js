import './App.css';
const task = (...value) => {
  return (
    <li>{value}</li>
  );
}
const compromissos = ['tomar café', 'estudar', 'codar', 'namorar'];

function App() {
  return (
    task(compromissos.map((tarefa, index) => <li key={index}>{tarefa}</li>))
  );
}

export default App;
