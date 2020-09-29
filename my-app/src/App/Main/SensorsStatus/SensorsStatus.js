import React from 'react'

import '../SensorsStatus/sensorsStatus.css'

const SensorsStatus =() =>{
    return(
        <div className="sensors__status">
                        <div className="sensort__status-item">
                            <div className="sensors__status-numb">
                                3
                            </div>
                            <div className="sensors__status-desc up">
                                Up Sensors
                            </div>
                        </div>
                        <div className="sensort__status-item">
                            <div className="sensors__status-numb down">
                                0
                            </div>
                            <div className="sensors__status-desc">
                                Down Sensors
                            </div>
                        </div>
                    </div>
    )
}

export default SensorsStatus