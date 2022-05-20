import React from 'react';

export const Counter = () => {
    // all properties starts with use are react hooks 
    //useState is a hook
    // let count =0;
    const [count, setCount] = React.useState(0);
    //const increamentCount = ()=>{ console.log('Pre', count) ;setCount(count+1); console.log('Post', count)}
    //const decrementCount = ()=>{ setCount(count-1); }
    //const doubleCount = ()=>{setCount(count*2); }
    return (
        <div>
            <h1>Counter App :<span className ={count%2===0?"even":"odd"}>{count}</span></h1>
            <button onClick={() => setCount(count + 1)}>Increament</button>
            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }}>Decreament</button>
            <button onClick={() => setCount(count * 2)}>Double</button>
        </div>
    )
}