import './App.css';
import ContactDetails from './contactdetails';
function App() {
  return (
    <div className="App">
      <contactDetails name="Abdul" age="20" />
      <hr />
      <contactDetails name="Hatim" age="25" />
    </div>
  );
}

export default App;
