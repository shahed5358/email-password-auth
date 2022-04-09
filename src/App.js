import { getAuth } from "firebase/auth"
import './App.css';
import app from './firebase.init';

const auth = getAuth(app)

function App() {
  return (
    <div className="App">
      <form >
        <input type="email" name="" id="" />
        <input type="password" name="" id="" />
      </form>
    </div>
  );
}

export default App;
