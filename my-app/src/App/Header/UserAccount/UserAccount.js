import React from "react"

import '../UserAccount/userAccount.css'
 import user from '../../../common/img/user.png'
const UserAccount =() =>{
    return(
    <a className="user">
        <div className="user__inner">
            <div className="user__info">
                <div className="user__name"> Paul Mifflin</div>
            </div>
            <img  className="user__avatar" src={user} alt=""/>        
        </div>
    </a>
    )
}

export default  UserAccount