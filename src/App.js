import 'antd/dist/antd.css';
import { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Result from './components/Result';
import Home from './pages/home';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Map from './pages/Map';
import Document from './pages/Document';

export const ModalContext = createContext();
function App() {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  useEffect(() => {
    console.log('visi', visible);
  });
  return (
    <BrowserRouter>
      <ModalContext.Provider
        value={{ visible, setVisible, setContent }}
      >
        <div className='app'>
          <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
              <Link className='navbar-brand' to='/'>
                <img src="/logo.png" style={{ height: 40, width: 40 }}></img>
              </Link>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarScroll'
                aria-controls='navbarScroll'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarScroll'
              >
                <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
                  <li className='nav-item'>
                    <Link
                      className='nav-link active'
                      aria-current='page'
                      to='/'
                    >
                      Trang chủ
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/document'>
                      Tài liệu
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/map'>
                      Map
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/map' element={<Map />}></Route>
            <Route path='/document' element={<Document />}></Route>
          </Routes>
        </div>
        <Result content={content} setContent={setContent}></Result>
        <ToastContainer draggable closeOnClick position='top-right' />
      </ModalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
