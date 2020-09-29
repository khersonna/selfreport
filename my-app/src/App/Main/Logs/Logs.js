import React from 'react'

import '../Logs/logs.css'

const Logs =() =>{
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
                <tr className="logs__table-line">
                    <td className="logs__table-cell" data-label="Sensor">Up</td>
                    <td className="logs__table-cell" data-label="Sensor">Wiki</td>
                    <td className="logs__table-cell" data-label="Data-time">18-09-2020 18:36:29</td>
                    <td className="logs__table-cell" data-label="Description">Successful Response</td>
                    <td className="logs__table-cell" data-label="Duration">118 hrs, 17 mins</td>
                </tr>
                <tr className="logs__table-line">
                    <td className="logs__table-cell" data-label="Sensor">Down</td>
                    <td className="logs__table-cell" data-label="Sensor">Wiki</td>
                    <td className="logs__table-cell" data-label="Data-time">18-09-2020 18:36:29</td>
                    <td className="logs__table-cell" data-label="Description">No Response</td>
                    <td className="logs__table-cell" data-label="Duration">118 hrs, 17 mins</td>
                </tr>
                <tr className="logs__table-line">
                    <td className="logs__table-cell" data-label="Sensor">Up</td>
                    <td className="logs__table-cell" data-label="Sensor">Lanet</td>
                    <td className="logs__table-cell" data-label="Data-time">18-09-2020 18:36:29</td>
                    <td className="logs__table-cell" data-label="Description">Successful Response</td>
                    <td className="logs__table-cell" data-label="Duration">118 hrs, 17 mins</td>
                </tr>
                <tr className="logs__table-line">
                    <td className="logs__table-cell" data-label="Sensor">Up</td>
                    <td className="logs__table-cell" data-label="Sensor">Dribble</td>
                    <td className="logs__table-cell" data-label="Data-time">18-09-2020 18:36:29</td>
                    <td className="logs__table-cell" data-label="Description">Successful Response</td>
                    <td className="logs__table-cell" data-label="Duration">118 hrs, 17 mins</td>
                </tr>
                <tr className="logs__table-line">
                    <td className="logs__table-cell" data-label="Sensor">Started</td>
                    <td className="logs__table-cell" data-label="Sensor">Lanet</td>
                    <td className="logs__table-cell" data-label="Data-time">18-09-2020 18:36:29</td>
                    <td className="logs__table-cell" data-label="Description">Started</td>
                    <td className="logs__table-cell" data-label="Duration">118 hrs, 17 mins</td>
                </tr>
                <tr className="logs__table-line">
                    <td className="logs__table-cell" data-label="Sensor">Started</td>
                    <td className="logs__table-cell" data-label="Sensor">Dribble</td>
                    <td className="logs__table-cell" data-label="Data-time">18-09-2020 18:36:29</td>
                    <td className="logs__table-cell" data-label="Description">Started</td>
                    <td className="logs__table-cell" data-label="Duration">118 hrs, 17 mins</td>
                </tr>
                <tr className="logs__table-line">
                    <td className="logs__table-cell" data-label="Sensor">Started</td>
                    <td className="logs__table-cell" data-label="Sensor">Wiki</td>
                    <td className="logs__table-cell" data-label="Data-time">18-09-2020 18:36:29</td>
                    <td className="logs__table-cell" data-label="Description">Started</td>
                    <td className="logs__table-cell" data-label="Duration">118 hrs, 17 mins</td>
                </tr>
            </tbody>
        </table>
    </div>

    )
}
export default Logs