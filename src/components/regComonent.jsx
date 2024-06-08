
import {useState} from "react";

let RegComponent =()=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let Login = () =>{
        console.log(`login: ${username}\npassword: ${password}`)
    }
    return(
        <div>
           <input type="text" title="login" placeholder="Login" value={username} onChange={event => setUsername(event.target.value)}/>
            <input type="text" title="password" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
            <button onClick={Login}>log in</button>
        </div>
    )
}
export default RegComponent