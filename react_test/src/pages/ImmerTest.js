import React, { useCallback, useRef, useState } from 'react';

const ImmerTest = () => {
    const NextId = useRef(1);
    const [form,setForm] = useState({name:'asd',username:'asd'});
    const [data,setData] = useState({array:[],uselessValue:null});
    console.log("랜더링했음")
    
    const onChange = useCallback(
        (e) =>{
            const {name,value} = e.target
            setForm({
                ...form,
                [name] : value
            })
        },[form]    
    )

    const onSubmit = useCallback(
        (e) =>{
            e.preventDefault();
            const list ={
                id:NextId.current,
                username:form.username,
                name:form.name
            }
            setData({
                ...data,
                array:data.array.concat(list)
            })
            setForm({
                name:'',
                username:''
            })
            NextId.current += 1
        },[data, form.name, form.username]
    )

    const onRemove = useCallback(
        (id) =>{
            setData({
                ...data,
                array:data.array.filter(list => list.id !== id)
            })
        },[data]
    )
    return (
        <div>
            <form onSubmit={onSubmit}>
            <input
                name="username"
                value={form.username}
                onChange={onChange}
            />
            <input
                name="name"
                value={form.name}
                onChange={onChange}
            />
            <button type="submit">버튼임</button>
            </form>
            <div>
                <ul>
                    {data.array.map(list => (<li key={list.id} onClick={()=>onRemove(list.id)}>{list.username} ({list.name})</li>))}
                </ul>
            </div>
        </div>
    );
};

export default ImmerTest;