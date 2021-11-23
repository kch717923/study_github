import React, { useReducer, useState } from 'react';

function reducer(state,action){
    switch(action.type){
        case "INCREMENT":
            return {value:state.value + 1};
        case "DECREMENT":
            return {value:state.value -1};
        default:
            return state;
    }
}

const Counter = () => {
    console.log("카운트하는놈")
    const [state,dispatch] = useReducer(reducer, {value:0});
    return (
        <div>
            <p>현재 카운터 값 <b>{state.value}</b></p>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>더해봐라</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>뺴봐라</button>
        </div>
    );
};

export default Counter;