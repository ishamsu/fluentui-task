import logo from './logo.svg';
import './App.css';
import Items from "./component/items";
import Profile from "./component/profile";
import Name from "./component/name";



function App() {
  return (
    <div>
<header className="App-header">
<Profile/> <div  className="App-header2">
  <Name/></div>  <div  className="App-header3">
  Shamsudheen<br></br><span style={{fontSize:13}}>Age 22</span></div>  </header>
    <div className="App App-header1">

<Items/>


    </div>

    </div>
    
  );
}

export default App;
