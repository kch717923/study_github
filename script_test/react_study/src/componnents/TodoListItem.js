import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from 'react-icons/md'

const TodoListItem = () => {
    return (
        <div className="todolistitem">
            <div className="todolistitem__checkbox">
                <MdCheckBoxOutlineBlank/>
                <div className="todolisitem__txt">할 일</div>
            </div>
            <div className="todolistitem__remove">
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;