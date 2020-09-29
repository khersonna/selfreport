import React from "react"

import '../UserAccount/userAccount.css'

const UserAccount =() =>{
    return(
    <a className="user">
        <div className="user__inner">
            <div className="user__info">
                <div className="user__name"> Paul Mifflin</div>
            </div>
            <div className="user__avatar">
                <img src="" alt=""/>
            </div>
        </div>
    </a>
    )
}

export default  UserAccount