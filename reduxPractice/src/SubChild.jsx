import React from 'react'
// import    from './features/showSlice'
import { useDispatch, useSelector } from 'react-redux';
import { increment,incrementByValue } from './features/showSlice';


// console.log(showData);   

function SubChild() {
    const dispatch=useDispatch();
    const data= useSelector((c)=>
    {
        return c.show.value;
        
    })
  return (
    <div>SubChild - {data}

    <button onClick={()=>dispatch(increment())}>click me</button>
    <button onClick={()=>dispatch(incrementByValue(10))}>click me</button>
    </div>

  )
}

export default SubChild