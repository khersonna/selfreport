import React from 'react'

import '../Notification/notification.css'

const Notification =() =>{
    return(
    <div className="logs__notification">
        <div className="logs__notification-title box-title">
            Notifications sent
        </div>
        <div className="logs__notification-item">
            <div className="logs__notification-phone">
                +380987654321
            </div>
            <div className="logs__notification-phone">
                +380987654321
            </div>
            <div className="logs__notification-phone">
                +380987654321
            </div>
            <button className="btn-phone" type="button">View All</button>
        </div>
    </div>
)
}

export default Notification