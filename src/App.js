import './App.css'
import axios from 'axios';
import { useState } from 'react'
function App() {
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState('');
  let login = () => {
    axios.post("https://secure-value-at-ctf.herokuapp.com/login", {
      password: password
    })
      .then(response => {
        if (response.data.done) {
          setFlag(response.data.flag)
        }
        else {
          setFlag("Wrong Password")
        }
      })
  }
  return (
    <div className="App">
      <br />
      <br />
      <br /><br /><br />
      Enter Password
      <input type="password" value={password} onChange={event => { setPassword(event.target.value) }} />
      <input type="button" value="Submit" onClick={login} />
      <br />
      {flag}
    </div>

  );
}

export default App;
