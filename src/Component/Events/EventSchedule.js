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
    console.log(eventSchedule, "eventSchedule")

    let schedule = null;
    if (eventSchedule === null) {
        schedule = <>
            <small className="px-3 py-1 ml-3 text-white" style={{ background: "var(--primary)" }}>Add Event Schedule</small>
        </>
    } else {
        if (Object.keys(eventSchedule).includes("schedules")) {
            {
                eventSchedule["schedules"].forEach((i, index) => {
                    return (
                        schedule = <>
                            <div key={i}>
                                {i.date} - {i.times.map((x)=>{
                                    return (
                                        <span key={x}>{x},&ensp;</span>
                                    )
                                })}
                            </div>
                        </>
                    )
                })
            }
        }
    }
    return (
        <>
            {schedule}
        </>
    )
}

export default EventSchedule;