const Header =()=> {

    return (
        <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="display-1">My Bio App</h1>
                </div> 
                <div className="col-md-6">       
                    <ul className="nav justify-content-around">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Home
                                </a>
                            </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            Early years
                            </a>
                        </li>
                        <li className="nav-item">
                        <a href="#" className="nav-link">
                            Present Day
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                           Future
                            </a>
                        </li>
                        <li className="nav-item">
                        <img src="https://via.placeholder.com/30x30" alt="placeholder img" className="img-fluid image" />                        
                        </li>
                    </ul>
                </div> 
            </div>
        </div>  
    </header>
    )
}

export default Header