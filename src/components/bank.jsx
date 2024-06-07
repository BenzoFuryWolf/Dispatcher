import {useDispatch, useSelector} from "react-redux";

let Bank = () =>{
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    const nominal = {
        "5":5,
        "10":10,
        "50":50,
        "100":100
    }

    const AddState = (payload) =>{
        dispatch({type:"ADD_STATE", payload:payload})
    }
    const SubtractState = (payload) =>{
        dispatch({type:"SUBTRACT_STATE", payload:payload})
    }

    return (
        <>
            <div>

            </div>
            <h1>MyDispatcher</h1>
            <div className="card">
                <h1>
                    {cash}
                </h1>
                <div>
                    <button onClick={() => AddState(nominal["5"])}>
                        Add 5
                    </button>
                    <button onClick={() => AddState(nominal["10"])}>
                        Add 10
                    </button>
                    <button onClick={() => AddState(nominal["50"])}>
                        Add 50
                    </button>
                    <button onClick={() => AddState(nominal["100"])}>
                        Add 100
                    </button>
                </div>
                <div>
                    <button onClick={() => SubtractState(nominal["5"])}>
                        Subtract 5
                    </button>
                    <button onClick={() => SubtractState(nominal["10"])}>
                        Subtract 10
                    </button>
                    <button onClick={() => SubtractState(nominal["50"])}>
                        Subtract 50
                    </button>
                    <button onClick={() => SubtractState(nominal["100"])}>
                        Subtract 100
                    </button>
                </div>

            </div>
        </>
    )
}
export default Bank