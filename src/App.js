import './App.css';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Friends from './components/Friends/Friends';
import { Link, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import CustomLink from './components/CustomLink/CustomLink';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router Practice Website.</h1>
      <nav>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
      </nav>
      {/* <CustomLink></CustomLink> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='friends/:id' element={<FriendDetails></FriendDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
