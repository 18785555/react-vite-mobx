
function Maibox(){
    const change=(e:any)=>{
        console.log(e.target.checked);
        
    }
    const itemsList = [1,2,3,4,5,6,7,8,9]
    return(
        <div className="row">
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <ul className="mailbox-menu list-unstyled">
                            <li><a href="#" className="active">Inbox<span className="badge badge-pill badge-success float-right">21</span></a></li>
                            <li><a href="#">Sent</a></li>
                            <li><a href="#">Important<span className="badge badge-pill badge-warning float-right">6</span></a></li>
                            <li><a href="#">Promotions<span className="badge badge-pill badge-danger float-right">11</span></a></li>
                            <li><a href="#">Social<span className="badge badge-pill badge-info float-right">3</span></a></li>
                            <li><a href="#">Drafts</a></li>
                            <li><a href="#">Spam</a></li>
                        </ul>
                        <h3 className="mailbox-menu-header">Contacts</h3>
                        <ul className="mailbox-contacts list-unstyled">
                            <li><a href="#"><img src="" />Louis Morgan</a></li>
                            <li><a href="#"><img src="" />Allen Ford</a></li>
                            <li><a href="#"><img src="" />William Adams</a></li>
                        </ul>
                        <h3 className="mailbox-menu-header">Groups</h3>
                        <ul className="mailbox-groups list-unstyled">
                            <li><a href="#"><i className="mailbox-group-friends"></i>Friends</a></li>
                            <li><a href="#"><i className="mailbox-group-work"></i>Work</a></li>
                            <li><a href="#"><i className="mailbox-group-family"></i>Family</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="card">
                    <div className="card-body">
                        <div className="inbox-options">
                                            <div className="inbox-checkbox-all">
                                                <div className="custom-control custom-checkbox form-group">
                                                    <input type="checkbox" className="custom-control-input" id="check-all-mail"/>
                                                    <label className="custom-control-label" htmlFor="check-all-mail"></label>
                                                </div>
                                            </div>
                                            <div className="inbox-page-count">
                                                Showing 1-50 of 3089
                                            </div>
                                            <div className="inbox-search">
                                                    <input type="text" className="form-control" id="searchInbox" placeholder="Search inbox"/>
                                            </div>
                        </div>
                        <ul className="inbox-list list-unstyled">
                            {
                                itemsList.map(item=>
                                <li key={item}>
                                    <a href="javascript: void(0);">
                                    <div className="mail-checkbox">
                                        <div className="custom-control custom-checkbox form-group">
                                            <input onClick={change} type="checkbox" className="custom-control-input"/>
                                            <label className="custom-control-label" htmlFor="mail11"></label>
                                        </div>
                                    </div>
                                    <div className="mail-author">
                                        <img src=""/> <span>William Adams</span>
                                    </div>
                                    <div className="mail-title">
                                        Nullam quis risus eget urna mollis ornare vel eu leo
                                    </div>
                                    <div className="mail-date">
                                        4 Apr
                                    </div>
                                    <div className="mail-star">
                                        <i className="material-icons">star_border</i>
                                    </div>
                                    </a>
                                </li>)
                            }
                        </ul>
                        <div className="inbox-pagination">
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Maibox