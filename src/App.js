import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
