import './App.css';
import Alert from './components/Notification.js';
import Navbar from './components/Navbar';
import Inner from './components/Inner';
function App() {
  return (
    <div className="App">
      <div>
        <div><Alert/></div>

        <div><Navbar/></div>

        {/* <div> */}
          <div>
            <Inner/>
          </div>
        {/* </div> */}

        <div></div>

        <div></div>
      </div>
      
    
    </div>
  );
}

export default App;
