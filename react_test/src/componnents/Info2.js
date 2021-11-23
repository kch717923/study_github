import React, { useState } from 'react';

const Info2 = () => {

    const [name,setName] = useState({
        name:'',
        nickname:''
    })

    const onChange =(e)=>{
        setName(
            {
                ...name,
                [e.target.name] : e.target.value
            }
        )
    }
    return (
        <div>
            <input name="name" value={name.name} onChange={onChange}/>
            <input name="nickname" value={name.nickname} onChange={onChange}/>
            <div>이름 : {name.name}</div>
            <div>닉네임: {name.nickname}</div>
        </div>
    );
};

export default Info2;