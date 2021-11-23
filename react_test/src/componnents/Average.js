import React, { useMemo, useRef, useState } from 'react';
const Average = () => {
    console.log("평균값 구하는놈")

    const [number,setNumber] = useState("")
    const [list,setList] = useState([])
    const inputEL = useRef(null)
    const box = {
        box1:"박스1",
        box2:"박스2",
    }
    const {box1:w} = box
    console.log(w + "구조분해할당 테스트")
    const onChange = (e) =>{
        const {value} = e.target
        setNumber(value)
    }

    const onClick = (e) =>{
        setList(list.concat(parseInt(number)))
        setNumber("")
        inputEL.current.focus()
    }
    const aver = (numbers) =>{
        console.log("계산중..")
        if(numbers.length === 0) return
        const sum = numbers.reduce((a,b) => a + b);
        return sum / numbers.length
    }
    const avg = useMemo(()=>aver(list),[list])
    return (
        <div>
            <input  value={number} onChange={onChange} ref={inputEL}/>
            <button onClick={onClick}>등록</button>
            <ul>
                {list.map((number)=>(<li>{number}</li>))}
            </ul>
            <div>{avg}</div>
        </div>
    );
};

export default Average;