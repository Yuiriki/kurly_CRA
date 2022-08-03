import React from 'react';
import MemberComponent from './MemberComponent';

const MainComponent = ({modal,modalShowFn}) => {
    return (
        <div id='main'>
            <MemberComponent modal={modal} modalShowFn={modalShowFn}/>
        </div>
    );
};

export default MainComponent;