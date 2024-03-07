import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieInfo from './components/MovieInfo';

function App() {

  return (
    <div>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movieInfo" element={<MovieInfo/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
