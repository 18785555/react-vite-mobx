import { useState } from "react"

function AppHeader(props:any) {
    const [dark,setDark]=useState<boolean>(false)
    const {getDarkTheme}=props
    const change =()=>{
        setDark(!dark)
        getDarkTheme(dark)
    }
  return (
    <div className="page-header">
        <nav className="navbar navbar-expand">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav">
                <li className="nav-item small-screens-sidebar-link">
                    <a href="#" className="nav-link"><i className="material-icons-outlined">menu</i></a>
                </li>
                <li className="nav-item nav-profile dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="" alt="profile image"/>
                        <span>Nancy Moore</span><i className="material-icons dropdown-icon">keyboard_arrow_down</i>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Calendar<span className="badge badge-pill badge-info float-right">2</span></a>
                        <a className="dropdown-item" href="#">Settings &amp; Privacy</a>
                        <a className="dropdown-item" href="#">Switch Account</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Log out</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"><i className="material-icons-outlined">mail</i></a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link"><i className="material-icons-outlined">notifications</i></a>
                </li>
                <li className="nav-item">
                    <a 
                    onClick={change}
                    href="#" 
                    className="nav-link" 
                    id="dark-theme-toggle">
                        <i className="material-icons-outlined">brightness_2
                        </i><i className="material-icons">brightness_2
                        </i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default AppHeader