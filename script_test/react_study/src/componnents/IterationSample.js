import React, { useState } from 'react';

const IterationSample = () => {
    const [names, setnames] = useState([
        {id:1,text:'첫번째'},
        {id:2,text:'두번쨰'},
        {id:3,text:'세번째'},
        {id:4,text:'네번째'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(names.length + 1);

    const onChange = e =>{setInputText(e.target.value)}

    const onClick = () =>{
        const nextNames = names.concat({
            id:nextId,
            text:inputText
        });
        setNextId(nextId + 1);
        setnames(nextNames)
        setInputText('');
    }

    const onRemove = id =>{
        const nextNames = names.filter(name => name.id !==id);
        setnames(nextNames)
    }
    const nameList = names.map(name => <li onDoubleClick={(e) =>{onRemove(name.id)}} key={name.id}>{name.text}</li>)
    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={inputText === '' ? '' : onClick}>추가</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;