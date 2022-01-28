import React, { useEffect, useRef, useState } from 'react';
import Header from '../component/Header';
import MainCrad from './MainCrad';
import dummy from '../dummy/Dummy.json'

const Main = () => {
    const topHight = useRef();
    const [contentTop,setContentTop] = useState()
    useEffect(()=>{
        setContentTop(topHight.current.offsetHeight)
    },[])

    const header_ico = {
        right:["ico__logo"]
    }

    const {info} = dummy

    return (
        <div className={'pc__container'}>
            <div className={'top top-fix'} ref={topHight}>
                <Header ico={header_ico}/>
            </div>
            <div className={'content'} style={{paddingTop:contentTop}}>
                <MainCrad info={info}/>
            </div>
        </div>
    );
};
export default Main;