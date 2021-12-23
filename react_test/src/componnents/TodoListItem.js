import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md'
import cn from 'classnames'

const TodoListItem = ({todo,onRemove,onToggle}) => {
    const {id, text, checked} = todo;
    return (
        <div className="todolistitem">
            <div className={cn('todolistitem__checkbox',{checked})} onClick={()=> onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className="todolistitem__txt">{text}</div>
            </div>
            <div className="todolistitem__remove" onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default React.memo(TodoListItem);