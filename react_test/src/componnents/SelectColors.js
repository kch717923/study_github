import React from 'react';
import { ColorConsumer } from '../contexts/Color';

const colors = ['red','orange','yellow','green','blue','indigo','violet']

const SelectColors = () => {
    return (
        <div>
            <h2>색상선택</h2>
            <ColorConsumer>
            {({actions}) =>(
                <div style={{display:'flex'}}>
                    {colors.map((color)=>(
                        <div
                            key={color}
                            style={{
                                background:color,
                                width:'24px',
                                height:'24px',
                                cursor:'pointer'
                            }}
                            onClick={()=> actions.setColor(color)}
                        />
                    ))}
                </div>
            )}
            </ColorConsumer>
        </div>
    );
};

export default SelectColors;