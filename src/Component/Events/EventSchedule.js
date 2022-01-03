import React, { useEffect, useState } from "react";
import Axios from "axios";

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

    let schedule = null;
    if (eventSchedule === null) {
        schedule = <>
            <small className="px-3 py-1 ml-3 text-white" style={{ background: "var(--primary)" }}>Add Event Schedule</small>
        </>
    } else {
        if (Object.keys(eventSchedule).includes("schedules")) {
            schedule = <>
                {
                    eventSchedule["schedules"].map((dataItem) => {
                        return (
                            <div className="col-12 p-2" key={dataItem.date}>
                                <>
                                    <span className="px-3 py-2 text-white mr-3" style={{background: "var(--primary)"}}>{dataItem.date}</span>
                                    {dataItem.times.map((timestamp) => {
                                        return (
                                            <span className="px-3 py-2 mr-2 bg-warning text-white">
                                                {timestamp}
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