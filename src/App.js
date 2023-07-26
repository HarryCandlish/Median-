
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Registration from './pages/Registration'
import Post from './pages/Post'


function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route exact path='/post/:postId' element={<Post/>}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
