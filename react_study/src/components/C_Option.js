import React from 'react';

const C_Option = ({evnt}) => {
    return (
        <>
            <div 
                onClick={evnt}
                data-option="btn__default-m">
                m으로 바꿔보랑께
            </div>
            <div
                onClick={evnt}
                data-option="">
                되돌려보랑께
            </div>
        </>
    );
};

export default C_Option;