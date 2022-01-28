import React from 'react';
import PhotoBox from '../material/Photo_box';

const MainCrad = ({info}) => {
    return (
        <>
            {
                info.map((info)=>(
                    <div key={info.id} className={'main_card'}>
                        <div className={'main_card__ment_box'}>
                            <PhotoBox/>
                            {
                                info.re_marry === true?
                                <span className={'main_card__re_marry'}>재혼</span>
                                :
                                <span className={'main_card__marry'}>결혼</span>
                            }
                            <span className={'main_card__nickname'}>{info.nickName}</span>
                            <span className={'main_card__ment'}>
                                {info.ment}
                            </span>
                        </div>
                        <div className={'main_card__sub_box'}></div>
                    </div>
                ))
            }
        </>

    );
};

export default MainCrad;