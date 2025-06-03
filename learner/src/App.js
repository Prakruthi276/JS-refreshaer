import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
let name="Harry";
function App() {
  
  return (
      <>
    <Navbar  title="textUtils"/>
    <div className="container">
      <TextForm heading="enter the text to the container"/>
      </div>

    

  </>
  );
}

export default App;
