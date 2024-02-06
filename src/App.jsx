import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detail } from './components/Detail';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Navbar from './components/Navbar'
import Container from './pages/Container'
import Trending from './pages/Trending';
import Upcoming from './pages/Upcoming';
import Favorite from './pages/Favoritepage';
import { MovieProvider } from "./Contextpage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <MovieProvider>
      
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />

      <Navbar />
      <div className="md:ml-[15rem]">
        <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/login' element={<Login />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/moviedetail/:id' element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/search/:query" element={<Container/>}/>
          <Route path="/search/" element={<Container/>}/>
        </Routes>
      </div>
    </MovieProvider>
  )
}

export default App
