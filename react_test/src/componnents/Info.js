import React, { useEffect, useReducer, useState } from 'react';

function reducer(state,action){
    return{
        ...state,
        [action.name]:action.value
    }
}

const Info = () => {
    const [state,dispatch] = useReducer(reducer,{
        name:'',
        nickname:''
    })

    const onChange = (e) =>{
        dispatch(e.target)
    }
    return (
        <div>
            <input name="name" value={state.name} onChange={onChange}/>
            <input name="nickname" value={state.nickname} onChange={onChange}/>
            <div>이름 : {state.name}</div>
            <div>닉네임 : {state.nickname}</div>
        </div>
    );
};

export default Info;