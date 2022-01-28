import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost,getUsers } from '../modules/sample';

const Sample = () => {
    const {loading,post,users} = useSelector(state => state.sample)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(1))
        dispatch(getUsers())
    },[dispatch])
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loading.GET_POST && '로딩중...'}
                {!loading.GET_POST && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <hr/>
            <section>
                <h1>사용자 목록</h1>
                {loading.GET_USERS && '로딩중...'}
                {!loading.GET_USERS && users && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                {user.username} ({user.email})
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </div>
    );
};

export default Sample;