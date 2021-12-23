import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md'

const TodoInsert = ({ onInsert }) => {
    const [value,setValue] = useState('');
    const onChange = useCallback(e =>{
        setValue(e.target.value)
    },[])

    const onSubmit = useCallback(
        e =>{
            onInsert(value);
            setValue('')
            e.preventDefault();
        },[onInsert,value]
    )
    return (
        <>
        <form className="todoinsert" onSubmit={onSubmit}>
            <input 
                className="todoinsert__txt"
                placeholder="할일입력하셈"
                value={value}
                onChange={onChange}
                />
            <button className="todoinsert__btn" type="submit"><MdAdd/></button>
        </form>
        </>
    );
};

export default TodoInsert;