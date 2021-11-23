import React, { useEffect, useState } from 'react';
import axios from 'axios';

const C_Title = ({compo}) => {

    const [edit,setEdit] = useState("false")
    const [value,setValue] = useState("")
    const [title,setTitle] = useState("")

    const editClick = () =>{
        setEdit("true")
    }

    const onChange = (e)=>{
        setValue(e.target.innerText)
    };
    useEffect(()=>{
        axios
        .get(compo)
        .then(function(res){
            setTitle(res.data.title);
            setValue(res.data.title);
        })
        .catch(function(err){
            console.log("에러났음" + err)
        })
    },[])

    const putTitle = () =>{
        setEdit("false")
        axios
        .put(compo,{
            title:value
        })
        .then(function(res){
            setTitle(res.data.title);
        })
        .catch(function(err){
            console.log("에러났음" + err)
        })
    }

    return (
        <div className="c_title">
            <div className="fc20 fs20 fwb pb20">Button
                <span onClick={editClick} className="ml6 fs13">수정</span>
                {edit === "true" && <span onClick={putTitle} className="ml6 fs13">저장</span>}
            </div>
            <div 
                contenteditable={edit}
                onKeyDown={onChange}
                data-test={value}
            >{title}</div>
        </div>
    );
};

export default C_Title;