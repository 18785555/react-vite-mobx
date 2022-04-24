
import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate()
    const login = (item:any)=>{
        navigate('/Layouts')
    }
    return(
        <body className="auth-page sign-in no-loader">
        
        <div className="loader">
            <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        <div className="connect-container align-content-stretch d-flex flex-wrap">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="auth-form">
                            <div className="row">
                                <div className="col">
                                    <div className="logo-box"><a href="#" className="logo-text">Connect</a></div>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" id="password" placeholder="Password"/>
                                        </div>
                                        <button onClick={login} type="button" className="btn btn-primary btn-block btn-submit">
                                           Sign In 
                                        </button>
                                        <div className="auth-options">
                                            <div className="custom-control custom-checkbox form-group">
                                                <input type="checkbox" className="custom-control-input" id="exampleCheck1"/>
                                                <label className="custom-control-label" htmlFor="exampleCheck1">Remember me</label>
                                            </div>
                                            <a href="#" className="forgot-link">Forgot Password?</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block d-xl-block">
                        <div className="auth-image"></div>
                    </div>
                </div>
            </div>
        </div>
</body>
    )
}
export default Login

function item(item: any): void {
    throw new Error("Function not implemented.");
}
