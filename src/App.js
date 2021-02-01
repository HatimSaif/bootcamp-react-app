import './App.css';
import ContactDetails from './contactdetails';
function App() {
  return (
    <div className="App">
      <ContactDetails MyName="Abdul" MyAge="20" />
      <hr />
      <ContactDetails MyName="Irfan" MyAge="26" />
    </div>
  );
}

export default App;
