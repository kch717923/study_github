import React from 'react';

const Btn = ({mody}) => {
    return (
        <div className="btn">
            <div className={`btn__default ${mody}`}>
                <div className="btn__txt">버튼이랑께</div>
            </div>
        </div>
    );
};

export default Btn;