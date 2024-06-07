
import './App.css'
import {useSelector,useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    const AddCash = () =>{
        dispatch({type:"ADD_CASH", payload:5})
    }
    const GetCash = () =>{
        dispatch({type:"GET_CASH", payload:5})
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
            <button onClick={() => AddCash()}>
               +
            </button>
            <button onClick={() => GetCash()}>
                -
            </button>
        </div>
    </>
  )
}

export default App
