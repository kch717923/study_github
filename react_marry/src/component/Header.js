import React from 'react';
import Ico from '../material/Ico';

const Header = ({ico}) => {
    return (
        <div className={"header"}>
            <div className={"header__btn_wrap"}>
                {
                    ico.right.map((ico,index) =>(
                        <div key={index} className={`header__btn`}>
                            <Ico ico={ico}/>
                        </div>
                    ))
                }
            </div>
            <div className={"header__btn_wrap mla"}>
                <div className={"header__btn"}>
                    컴포넌트 기준 정신나가
                </div>
            </div>
        </div>
    );
};

export default Header;