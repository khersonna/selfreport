import React, { Component } from 'react'


import '../Logs/logs.css'

class Logs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded: false,

        }
    }
    componentDidMount() {
        fetch('https://run.mocky.io/v3/453de65a-8024-4ab9-a35a-ef6a177d9dc5')
            .then(result => result.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    data: json,
                })
            });
    }

    render() {
        var { isLoaded, data } = this.state;
        if (!isLoaded) {
            return <p>Error...</p>
        } else {

            return (
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
                            {data.logs.map((log =>
                                (
                                    <tr className="logs__table-line" key={log.logId} >
                                        <td className="logs__table-cell sens" data-label="Sensor">{log.status}</td>
                                        <td className="logs__table-cell" data-label="Sensor">{log.friendlyName}</td>
                                        <td className="logs__table-cell" data-label="Data-time">{log.datetime}</td>
                                        <td className="logs__table-cell" data-label="Description">{log.description}</td>
                                    </tr>
                                )
                            ))
                            }

                        </tbody>
                    </table>
                </div>
            )
        }
    }


}
export default Logs




























