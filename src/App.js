import 'antd/dist/antd.css';
import { createContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Result from './components/Result';
import Home from './pages/home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

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
              <a className='navbar-brand' href='/'>
                Navbar scroll
              </a>
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
                    <a
                      className='nav-link active'
                      aria-current='page'
                      href='#'
                    >
                      Trang chủ
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='/'>
                      Chi tiết
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link'>Liên hệ</a>
                  </li>
                </ul>
                <form className='d-flex'>
                  <input
                    className='form-control me-2'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                  />
                  <button
                    className='btn btn-outline-success'
                    type='submit'
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
        <Result content={content} setContent={setContent}></Result>
        <ToastContainer draggable closeOnClick position='top-right' />
      </ModalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
