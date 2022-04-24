
function Calendar(){
    return(
        <div className="main-warpper">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div id="calendar" className="fc fc-ltr fc-bootstrap">
                            <div className="fc-toolbar fc-header-toolbar flex">
                                <div className="fc-left">
                                    <h2>April 2022</h2>
                                </div>
                                <div className="fc-center">
                                    <div className="btn-group">
                                        <button type="button" className="fc-dayGridMonth-button btn btn-primary active">month</button>
                                        <button type="button" className="fc-timeGridWeek-button btn btn-primary">week</button>
                                        <button type="button" className="fc-timeGridDay-button btn btn-primary">day</button>
                                    </div>
                                </div>
                                <div className="fc-right">
                                    <div className="btn-group">
                                        <button type="button" className="fc-prev-button btn btn-primary" aria-label="prev">
                                            <span className="fa fa-chevron-left">
                                            </span>
                                        </button>
                                        <button type="button" className="fc-next-button btn btn-primary" aria-label="next">
                                            <span className="fa fa-chevron-right"></span>
                                        </button>
                                    </div>
                                    <button type="button" className="fc-today-button btn btn-primary">today</button>
                                </div>
                            </div>
                            <div className="fc-view-container">
                                <div className="fc-view fc-dayGridMonth-view fc-dayGrid-view">
                                    <table className="table-bordered">
                                    <thead className="fc-head">
                                        <tr>
                                            <td className="fc-head-container ">
                                                <div className="fc-row table-bordered">
                                                    <table className="table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th className="fc-day-header  fc-sun">
                                                                    <span>Sun</span>
                                                                </th>
                                                                <th className="fc-day-header  fc-mon">
                                                                    <span>Mon</span>
                                                                </th>
                                                                <th className="fc-day-header  fc-tue">
                                                                    <span>Tue</span>
                                                                </th>
                                                                <th className="fc-day-header  fc-wed">
                                                                    <span>Wed</span>
                                                                </th>
                                                                <th className="fc-day-header  fc-thu">
                                                                    <span>Thu</span>
                                                                </th>
                                                                <th className="fc-day-header  fc-fri">
                                                                    <span>Fri</span>
                                                                </th>
                                                                <th className="fc-day-header  fc-sat">
                                                                    <span>Sat</span>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    Name</thead>
                                    </table>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calendar