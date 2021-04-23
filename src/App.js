import { useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import NavBar from './components/NavBar/NavBar'
import { getUserInfo } from './components/services/UserService';

function App() {
  const [user,setUser] = useState(null)

  const getUser = ()=> {

   return getUserInfo()
    .then(response => console.log(response))
  }

  return (
    <div className="App">
     <NavBar/>
     <AppRouter/>
    </div>
  );
}

export default App;
