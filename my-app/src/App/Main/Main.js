import React from 'react'

import '../Main/main.css'

import Sensors from './Sensors/Sensors'
import SensorsStatus from './SensorsStatus/SensorsStatus'
import Logs from './Logs/Logs'
import Notification from './Notification/Notification'





const Main = () => {
    return (
        <div>
            <section className="sensors">
                <div className="container">
                    <div className="sensors__top headline">
                        <div className="sensors__title title">
                            Last 24 hours
                        <span className="sensors__subtitle subtitle"> Compare to previous period</span>
                        </div>
                        <a href="#" className="btn"> + Add New Sensor</a>
                    </div>
                    <div className="sensors__inner">

                        <Sensors />
                        <SensorsStatus />
                    </div>
                </div>
            </section>
            <section className="logs">
                <div className="container">
                    <div className="logs__top headline">
                        <div className="logs__title title">
                            Latest Events for all Sensors
                        <span className="logs__subtitle subtitle"> (up, down, start, pause)</span>
                        </div>
                        <a className="logs__btn">Export Logs</a>
                    </div>
                    <div className="logs__inner">
                        <Logs />
                        <Notification />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
