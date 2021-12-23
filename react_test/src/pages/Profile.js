import React from 'react';
import { useParams } from 'react-router';

const data ={
    velopert:{
        name:'testname',
        description:'react'
    },
    gildong:{
        name:'honggildong',
        description:'text'
    }
}

const Profile = () => {
    const {username} = useParams()
    console.log(username)
    const profile = data[username];
    if(!profile){
        return<div>존재하지 않는 사용자</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;