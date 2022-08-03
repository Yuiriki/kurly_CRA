import React, { useState } from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import ModalComponent from './ModalComponent';

const WrapComponent = () => {

    const [modal,setModal] = useState({
        title:'',
        showModal:false
    });
    const modalClose=(e)=>{
        setModal({...modal,showModal:false})
    }
    const modalShowFn = (tit) => {
        setModal({...modal,title:tit,showModal:true})
    }

    return (
        
        <div id='wrap'>
            <HeaderComponent/>
            <MainComponent modal={modal} modalShowFn={modalShowFn}/>
            <FooterComponent/>
            <ModalComponent modal={modal} modalCloseFn={modalClose}/>
        </div>
    );
};

export default WrapComponent;