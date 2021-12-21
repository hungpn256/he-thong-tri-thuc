import './App.css';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import Target from './components/Target';
import { createContext, useEffect, useState } from 'react';
import Result from './components/Result'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
                    <Panel header="This is panel header 2" key="2">
                        <p>heello</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>heello</p>
                    </Panel>
                </Collapse>
            </div>
            <Result></Result>
            <ToastContainer
                draggable
                closeOnClick
                position="top-right"
            />
        </ModalContext.Provider>
    );
}

export default App;
