import React from 'react';
import ColorContext from '../contexts/Color';

const ColorBox = () => {
    return (
        <ColorContext.Consumer>
            {value =>(
                <div
                    style={{
                        width:'64px',
                        height:'64px',
                        background:value.color_2
                    }}
                />
            )}
        </ColorContext.Consumer>
    );
};

export default ColorBox;