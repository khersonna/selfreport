import React, { Component } from 'react'

import '../Sensors/sensors.css'

class Sensors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: []
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
                <div className="sensors__box box">
                    <div className="sensors__box-top">
                        <div className="sensors__box-title box-title">
                            Sensors
                    </div>
                        <div className="sensors__top-sort">
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
                    {
                        data.monitors.map((mon) => (
                            <div className="sensors__item" key={mon.monitorID}>
                                <div className="sensors__item-title">
                                    {mon.friendlyName}
                                    <span className="sensors__item-subtitle">
                                        {mon.monitorType}
                                    </span>
                                </div>
                                <ul class="sensors__timeline">
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment "></li>
                                    <li class="sensors__timeline-segment error-color"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                    <li class="sensors__timeline-segment"></li>
                                </ul>
                                <span className="sensors__item-persentage">
                                    100%
                    </span>
                            </div>
                        ))
                    }
                </div>

            )
        }

    }

}



export default Sensors














