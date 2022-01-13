import 'antd/dist/antd.css';
import { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Result from './components/Result';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Map from './pages/Map';
import System from './pages/System';
import Contact from './pages/Contact';
import Home from './pages/home';
export const ModalContext = createContext();
function App() {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  useEffect(() => {
    // window.addEventListener(
    //   'scroll',
    //   function (e) {
    //     const nav = document.getElementById('navbar');
    //     if (window.scrollY > 0) {
    //       nav.classList.add('sticky');
    //     } else {
    //       nav.classList.remove('sticky');
    //     }
    //   },
    //   { passive: true },
    // );
  }, []);
  return (
    <BrowserRouter>
      <ModalContext.Provider
        value={{ visible, setVisible, setContent }}
      >
        <div className='app'>
          {/* Thanh điều hướng */}
          <nav className="navbar navbar-expand-lg navbar-light sticky-top py-3" style={{ backgroundColor: '#6B6361' }} id="mainNav">
            <div className="container px-4 px-lg-5">
              <Link className="navbar-brand" to="/">Hệ Thống Lái Xe Tự Động</Link>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0">
                  <li className="nav-item"><Link className="nav-link" to="/">Giới thiệu</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/system">Hệ thống</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/map">Bản đồ</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/contact">Liên hệ</Link></li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/system' element={<System />}></Route>
            <Route path='/map' element={<Map />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
        <Result content={content} setContent={setContent}></Result>
        <ToastContainer draggable closeOnClick position='top-right' />
      </ModalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
