import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router';

const About = () => {
    const location = useLocation();
    const query = qs.parse(location.search,{
        ignoreQueryPrefix:true
    })
    console.log(location)
    console.log(query)
    const showDetail = query.detail === 'true'
    return (
        <div>
            <h1>서브</h1>
            <h1>라우팅 테스트 서브 페이지</h1>
            {showDetail && <p>detail 값을 true로</p>}
        </div>
    );
};

export default About;