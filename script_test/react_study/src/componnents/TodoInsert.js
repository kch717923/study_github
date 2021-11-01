import React from 'react';
import { MdAdd } from 'react-icons/md'

const TodoInsert = () => {
    return (
        <>
        <form className="todoinsert">
            <input className="todoinsert__txt" placeholder="할일입력하셈"/>
            <button className="todoinsert__btn" type="submit"><MdAdd/></button>
        </form>
        </>
    );
};

export default TodoInsert;