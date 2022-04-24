
function Dashboard(){
    return(
        <div className="main-wrapper">
                        <div className="row stats-row">
                            <div className="col-lg-4 col-md-12">
                                <div className="card card-transparent stats-card">
                                    <div className="card-body">
                                        <div className="stats-info">
                                            <h5 className="card-title">$3,089.67<span className="stats-change stats-change-danger">-8%</span></h5>
                                            <p className="stats-text">Total revenue for last  20 days</p>
                                        </div>
                                        <div className="stats-icon change-danger">
                                            <i className="material-icons">trending_down</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card card-transparent stats-card">
                                    <div className="card-body">
                                        <div className="stats-info">
                                            <h5 className="card-title">168,047<span className="stats-change stats-change-success">+16%</span></h5>
                                            <p className="stats-text">Unique visitors in current period</p>
                                        </div>
                                        <div className="stats-icon change-success">
                                            <i className="material-icons">trending_up</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12">
                                <div className="card card-transparent stats-card">
                                    <div className="card-body">
                                        <div className="stats-info">
                                            <h5 className="card-title">47,350<span className="stats-change stats-change-success">+12%</span></h5>
                                            <p className="stats-text">Total investments in this month</p>
                                        </div>
                                        <div className="stats-icon change-success">
                                            <i className="material-icons">trending_up</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card savings-card">
                                    <div className="card-body">
                                        <h5 className="card-title">Savings<span className="card-title-helper">30 Days</span></h5>
                                        <div className="savings-stats">
                                            <h5>$4,502.00</h5>
                                            <span>Total savings for last month</span>
                                        </div>
                                        <div id="sparkline-chart-1"><canvas width="390" height="100" className="sparkline-chart-1"></canvas></div>
                                    </div>
                                </div>
                                <div className="card top-products">
                                    <div className="card-body">
                                        <h5 className="card-title">Popular Products<span className="card-title-helper">Today</span></h5>
                                        <div className="top-products-list">
                                            <div className="product-item">
                                                <h5>Alpha - File Hosting Service</h5>
                                                <span>4,037 downloads</span>
                                                <i className="material-icons product-item-status product-item-success">arrow_upward</i>
                                            </div>
                                            <div className="product-item">
                                                <h5>Lime - Task Managment Dashboard</h5>
                                                <span>1,876 downloads</span>
                                                <i className="material-icons product-item-status product-item-success">arrow_upward</i>
                                            </div>
                                            <div className="product-item">
                                                <h5>Space - Meetup Hosting App</h5>
                                                <span>1,252 downloads</span>
                                                <i className="material-icons product-item-status product-item-danger">arrow_downward</i>
                                            </div>
                                            <div className="product-item">
                                                <h5>Meteor - Messaging App</h5>
                                                <span>938 downloads</span>
                                                <i className="material-icons product-item-status product-item-success">arrow_upward</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card">
                                    <div className="card-header">
                                        <ul className="nav nav-tabs card-header-tabs">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Visitors</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Reports</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Investments</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card-body">
                                        <div className="visitors-stats" style={{position: 'relative'}}>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="visitors-stats-info">
                                                        <p>Total visitors in the current period:</p>
                                                        <h5>77,871</h5>
                                                        <span>6-26 Apr</span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="visitors-stats-info">
                                                        <p>Unique visitors in the current period and ratio:</p>
                                                        <h5>58,403</h5>
                                                        <span>6-26 Apr</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            
                                        <div className="resize-triggers"><div className="expand-trigger"><div style={{width: '760px', height: '506px'}}></div></div><div className="contract-trigger"></div></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="alert alert-info no-m" role="alert">
                                        Data has been updated 35 minutes ago, go to the reports page to access data history.
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Server Load<span className="card-title-helper">Optimal</span></h5>
                                        <div className="server-load row">
                                            <div className="server-stat col-sm-4">
                                                <p>167GB</p>
                                                <span>Usage</span>
                                            </div>
                                            <div className="server-stat col-sm-4">
                                                <p>320GB</p>
                                                <span>Space</span>
                                            </div>
                                            <div className="server-stat col-sm-4">
                                                <p>57.4%</p>
                                                <span>CPU</span>
                                            </div>
                                        </div>
                                        <div id="server-load-chart" style={{padding: '0px', position: 'relative'}}><canvas className="flot-base flot-base1" width="405" height="207"></canvas><canvas className="flot-overlay flot-overlay1" width="405" height="207" ></canvas></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card card-transactions">
                                    <div className="card-body">
                                        <h5 className="card-title">Transactions<a href="#" className="card-title-helper blockui-transactions"><i className="material-icons">refresh</i></a></h5>
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Company</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>0776</td>
                                                        <td>Sale Management</td>
                                                        <td>$18, 560</td>
                                                        <td><span className="badge badge-success">Finished</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>0759</td>
                                                        <td>Dropbox</td>
                                                        <td>$40, 672</td>
                                                        <td><span className="badge badge-warning">Waiting</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>0741</td>
                                                        <td>Social Media</td>
                                                        <td>$13, 378</td>
                                                        <td><span className="badge badge-info">In Progress</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>0740</td>
                                                        <td>Envato Market</td>
                                                        <td>$17, 456</td>
                                                        <td><span className="badge badge-info">In Progress</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td>0735</td>
                                                        <td>Graphic Design</td>
                                                        <td>$29, 999</td>
                                                        <td><span className="badge badge-secondary">Canceled</span></td>
                                                    </tr>
                                                </tbody>
                                            </table> 
                                        </div>     
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    )
}
export default Dashboard