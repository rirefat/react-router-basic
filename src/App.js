import './App.css';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Friends from './components/Friends/Friends';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router Practice Website.</h1>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/friends">Friends</a>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
