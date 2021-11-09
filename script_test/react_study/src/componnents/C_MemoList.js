import React from 'react';

const C_MemoList = ({memo}) => {
    return (
        <div className="c_memolist">
            <div className="c_memolist__txt">{memo}</div>
            <div className="c_memolist__del pl10" >삭제</div>
        </div>
    );
};

export default C_MemoList;