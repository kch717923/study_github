import React from 'react';

const C_Body = ({compos}) => {
    const [C_title,C_Memo,C_Option,Btn] = compos
    return (
        <div className="c_body">
            {C_title}
            <div className="c_body__content">
                <div className="c_body__view">
                    {Btn}
                </div>
                <div className="c_body__option">
                    {C_Option}
                </div>
            </div>
            {C_Memo}
        </div>
    );
};

export default C_Body;