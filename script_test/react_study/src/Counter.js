import React, { useState } from 'react';
const Counter = () => {
    const [form, setForm] = useState({
        username:'',
        message:''
    });
    const [username,message] = form;
    const onChange = e =>{
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm)
    }
    const onClick = () =>{
        alert(username + ':' + message);
        setForm({
            username:'',
            message:''
        });
    };
    
    return (
        <div>
            
        </div>
    );
};

export default Counter;