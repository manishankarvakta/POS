import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import POS from './components/POS/POS';
import RequireAuth from './components/RuquireAuth/RequireAuth';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Welcome from './components/User/Welcome';
import useFirebase from './hooks/useFirebase';

function App() {
  const {user} = useFirebase()
  return (
    <div className="App">
      <Header />

      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pos" element={            
            <RequireAuth>
              <POS />                
            </RequireAuth>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
