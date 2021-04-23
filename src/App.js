import { useState } from 'react';
import './App.css';
import AppRouter from './components/AppRouter/AppRouter';
import NavBar from './components/NavBar/NavBar'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
