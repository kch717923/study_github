import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md'

const TodoInsert = () => {
    const [value,setValue] = useState('');
    const onChange = useCallback(e =>{
        setValue(e.target.value)
    })
    return (
        <>
        <form className="todoinsert">
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