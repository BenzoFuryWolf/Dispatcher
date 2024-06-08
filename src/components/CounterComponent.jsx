 import {useState} from 'react'

let CounterComponent = () =>{
    const [state, setState] = useState(0)

    let increment=()=>{
        setState(state + 1)
    }
    let decrement=()=>{
        setState(state - 1)
    }


    return(
        <div className="Counter">
            <h1>{state}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default CounterComponent;