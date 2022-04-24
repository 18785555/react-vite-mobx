function MassegeBox(){
    return(
        <div className="mailbox-item">
                <div className="mail-container">
                    <div className="mail-header">
                        <div className="mail-title">
                            Notes have been uploaded for next exam
                        </div>
                    </div>
                    <div className="mail-info">
                        <div className="mail-author">
                            <img src="../../assets/images/avatars/profile-image-2.png" alt=""/>
                            <div className="mail-author-info">
                                <span className="mail-author-name">William Adams</span>
                                <span className="mail-author-address">w.adams@gmail.com</span>
                            </div>
                        </div>
                        <div className="mail-other-info">
                            <span>18:01</span>
                        </div>
                    </div>
                    <div className="divider">
                        sdlfjlsdjflksdj
                    </div>
                    
                    <div className="mail-actions">
                        <button className="btn btn-secondary">Reply</button>
                        <button className="btn btn-success">Forwawrd</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
        </div>
    )
}
export default MassegeBox