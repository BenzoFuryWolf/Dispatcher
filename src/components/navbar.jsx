import {Link, Outlet} from "react-router-dom";

let Navbar = () =>{
    return(<>
        <header>
            <nav>
                <Link to={`/Main`}>Main</Link>
                <Link to={`/bank`}>Dispatcher</Link>
                <Link to={`/counter`}>Counter</Link>
                <Link to={`/About`}>About</Link>

            </nav>
        </header>
        <main>
            <Outlet/>
        </main>

    </>)
}

export default Navbar