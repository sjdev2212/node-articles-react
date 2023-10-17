import './App.css';
import  { Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './features/users/Login';
import WelcomePage from './components/WelcomePage';
import Register from './features/users/Register';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <main>
<ToastContainer />
   
      <Routes>
        <Route path="/"  element={
          <Home />
        } />
        <Route path="/login" element={<Login />}
        />
        <Route path="/welcome" element={<WelcomePage />}
        />
        <Route path="/register" element={<Register />}
        />

      </Routes>

    </main>
  );
}

export default App;
