import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const EventSchedule = (props) => {
    const [eventSchedule, setEventSchedule] = useState({});
    const url = `https://apidev.ticketezy.com/events/${props.data}/event_schedules`
    useEffect(() => {
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setEventSchedule(res.data);
        })
    }, [])
    
    const toDate = (time) => {
        var d = new Date(time);
        var value = d.toLocaleTimeString();
        return value;
    }

    let schedule = null;
    if (eventSchedule === null) {
        schedule = <>
            <Link className="px-3 py-1 ml-3 text-white add-seat" to={`/events/${props.data}/event_schedules`} role="button">Add Event Schedule</Link>
        </>
    } else {
        if (Object.keys(eventSchedule).includes("schedules")) {
            schedule = <>
                {
                    eventSchedule["schedules"].map((dataItem) => {
                        return (
                            <div className="col-12 p-2" key={dataItem.date}>
                                <>
                                    <span className="px-3 py-2 text-white mr-3" style={{ background: "var(--primary)" }}>{dataItem.date}</span>
                                    {dataItem.times.map((time) => {
                                        return (
                                            <span className="px-3 py-2 mr-2 bg-warning text-white" key={time}>
                                                {toDate(time)}
                                            </span>
                                        )
                                    })}
                                </>
                            </div>
                        )
                    })
                }
            </>
        }
    }
    return (
        <>
            {schedule}
        </>
    )
}

export default EventSchedule;