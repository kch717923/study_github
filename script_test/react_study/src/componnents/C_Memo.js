/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import C_MemoList from './C_MemoList';
const C_Memo = ({compo}) => {
    const [memo,setMemo] = useState("")
    useEffect(()=>{
        axios
        .get(compo + "memo")
        .then(function(res){
            const memolist = res.data.map((list) =>{return <C_MemoList memo={list.memo}/>})
            setMemo(memolist)
            console.log("뭐가 문제임")
        })
        .catch(function(err){
            console.log("차라리 에러라도 나던가" + err);
        })
    },[])

    return (
        <div className="c_memo">
            <div className="fc20 fs20 fwb pb20">메모란</div>
            {memo}
            <div className="c_memo__input_box">
            <input className="c_memo__input"></input>
            <div className="c_memo__input_submit pl10">추가</div>
            </div>
        </div>
    );
};

export default C_Memo;