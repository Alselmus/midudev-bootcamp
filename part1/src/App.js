import './App.css';
import Mensaje from './Mensaje';

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message=' En un curso'/>
      <Mensaje color='yellow' message=' de react'/>
    </div>
  );
}

export default App;
