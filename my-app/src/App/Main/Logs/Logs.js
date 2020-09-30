import React from 'react'

import '../Logs/logs.css'
import data from '../data.js';

const Logs =() =>{
    var alertLogs = data.alertLogs.map(log =>
        (
            <tr className="logs__table-line">
                <td className="logs__table-cell" data-label="Sensor">{log.status}</td>
                <td className="logs__table-cell" data-label="Sensor">{log.sensor_name}</td>
                <td className="logs__table-cell" data-label="Data-time">{log.datetime}</td>
                <td className="logs__table-cell" data-label="Description">{log.description}</td>
                <td className="logs__table-cell" data-label="Duration">{log.logId}</td>
            </tr>
        )
    );

    return(
    <div className="logs__box box">
        <div className="logs__box-top">
            <div className="logs__box-title box-title">
                Logs
            </div>
            <div className="logs__form-sort">
                <form className="sort">
                    <select name="category">
                        <option value="all">Sort by</option>
                        <option value="">Sort</option>
                        <option value="">Sort</option>
                        <option value="">Sort </option>
                        <option value="">Sort</option>
                        <option value="">Sort </option>
                        <option value="">Sort </option>
                        <option value="">Sort</option>
                    </select>
                </form>
                <div className="settings">
                    <svg>
                        <circle r="3" cy="10" cx="65" />
                        <circle r="3" cy="10" cx="80" />
                        <circle r="3" cy="10" cx="50" />
                    </svg>
                </div>
            </div>
        </div>
        <table className="logs__table">
            <thead className="logs__table-head">
                <tr className="logs__table-line caption">
                    <th className="logs__table-caption">Event</th>
                    <th className="logs__table-caption">Sensor</th>
                    <th className="logs__table-caption">Data-time</th>
                    <th className="logs__table-caption">Description</th>
                    <th className="logs__table-caption">Duration</th>
                </tr>
            </thead>
            <tbody className="logs__table-body">
            {alertLogs}
            </tbody>
        </table>
    </div>
    )
}
export default Logs