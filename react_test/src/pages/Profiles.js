import React from 'react';
import { Link,Route,Routes } from 'react-router-dom';
import Profile from './Profile';
const Profiles = () => {
    return (
        <div>
            <h3>사용자 목록:</h3>
            <ul>
                <li>
                    <Link to="velopert">첫번째 파라미터</Link>
                </li>
                <li>
                    <Link to="gildong">두번째 파라미터</Link>
                </li>
            </ul>
            <Routes>
                <Route path=":username" element={<Profile/>}/>
            </Routes>
        </div>
    );
};

export default Profiles;