import './App.css';
import  { Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './features/users/Login';


function App() {
  return (
    <main>

   
      <Routes>
        <Route path="/"  element={
          <Home />
        } />
        <Route path="/login" element={<Login />}
        />

      </Routes>

    </main>
  );
}

export default App;
