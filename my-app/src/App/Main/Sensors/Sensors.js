import React from 'react'

import '../Sensors/sensors.css'

const Sensors = (props) => {
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
            <div className="sensors__item">
                <div className="sensors__item-title">
                    Dribble
                    <span className="sensors__item-subtitle">
                        http
                    </span>
                </div>
                <div className="sensors__item-timeline">
                </div>
                <span className="sensors__item-persentage">
                    100%
            </span>
            </div>
            <div className="sensors__item">
                <div className="sensors__item-title">
                    Lanet
                    <span className="sensors__item-subtitle">
                        ping
                    </span>
                </div>
                <div className="sensors__item-timeline">
                </div>
                <span className="sensors__item-persentage">
                    100%
            </span>
            </div>
            <div className="sensors__item">
                <div className="sensors__item-title">
                    Wiki
                    <span className="sensors__item-subtitle">
                        http
                    </span>
                </div>
                <div className="sensors__item-timeline">
                </div>
                <span className="sensors__item-persentage">
                    100%
            </span>
            </div>
        </div>

    )
}

export default Sensors