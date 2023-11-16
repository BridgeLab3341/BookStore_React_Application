import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { Router } from './Components/Router/Router';

function App() {
  return (
    <div className="App">
      <Router/>
      {/* <SignIn/> */}
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
