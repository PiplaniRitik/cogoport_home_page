import './App.css';
import Alert from './components/Notification.js';
import Navbar from './components/Navbar';
import Inner from './components/Inner';
function App() {
  return (
    <div className="App" style={{position:"relative"}}>
     
        <Alert/>
        <Navbar/>
        <Inner/>

      
      
    
    </div>
  );
}

export default App;
