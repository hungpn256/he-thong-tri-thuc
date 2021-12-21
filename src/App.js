import './App.css';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import Target from './components/Target';
import { createContext, useEffect, useState } from 'react';
import Result from './components/Result'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Connering from './components/Connering';
import AvoidCollision from './components/AvoidCollision';
const { Panel } = Collapse;
export const ModalContext = createContext();
function App() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        console.log('visi', visible)
    })
    return (
        <ModalContext.Provider value={{ visible, setVisible }}>
            <center class="my-5">
                <h1>    Hệ thống lái xe tự động</h1>
            </center>
            <div class="container">
                <Collapse accordion>
                    <Panel header="Đi tới mục tiêu" key="1">
                        <Target></Target>
                    </Panel>
                    <Panel header="Đi đến khúc cua" key="2">
                        <Connering></Connering>
                    </Panel>
                    <Panel header="Tránh va chạm" key="3">
                        <AvoidCollision></AvoidCollision>
                    </Panel>
                </Collapse>
            </div>
            <Result></Result>
            <ToastContainer
                draggable
                closeOnClick
                position="top-right"
                theme='dark'
            />
        </ModalContext.Provider>
    );
}

export default App;
