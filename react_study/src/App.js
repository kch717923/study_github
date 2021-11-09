/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import axios from 'axios';
import C_Header from './components/C_Header';
import C_Body from './components/C_Body';
import C_Title from './components/C_Title';
import C_Memo from './components/C_Memo';
import C_Option from './components/C_Option';
import Btn from './components/Btn';
import './css/bundle.css'


function App() {
    const compo = "/btn"
    const [type,setType] = useState("btn__default")
    const [mody,setMody] = useState("");
    const onClick = (e) =>{
        setMody(e.target.getAttribute('data-option'))
    }
    return (
        <>  
            <C_Header/>
            <C_Body 
                compos={[<C_Title compo={compo}/>,
                        <C_Memo compo={compo}/>,
                        <C_Option evnt={onClick}/>,
                        <Btn type={type} mody={mody}/>]}
            />
        </>
    );
}

export default App;
