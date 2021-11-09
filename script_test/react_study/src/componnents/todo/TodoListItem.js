import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md'
import cn from 'classnames'

const TodoListItem = ({todo}) => {
    const {text, checked} = todo;
    return (
        <div className="todolistitem">
            <div className={cn('todolistitem__checkbox',{checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="todolistitem__txt">{text}</div>
            </div>
            <div className="todolistitem__remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;