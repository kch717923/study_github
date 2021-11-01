import React from 'react';

const TodoTemplate = ({children}) => {
    return (<>
        <div className="todotemplate">
            <div className="todotemplate__title">일정관리</div>
            <div className="todotemplate__content">{children}</div>
        </div>
    </>);
};

export default TodoTemplate;