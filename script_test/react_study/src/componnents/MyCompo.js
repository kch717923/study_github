import React from 'react';
import PropTypes from 'prop-types';

const MyCompo = ({name, children}) => {
    return (<div>
                이런 이런게 있었어? {name}<br/>
                {children}
            </div>);
};

MyCompo.defaultProps = {
    name : '기본이름'
}
MyCompo.propTypes = {
    name : PropTypes.string
};
export default MyCompo;