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
            {eventSchedule["schedules"].forEach((e)=>{
                return (
                    <>{e.times},{e.date}</>
                )
            })}
            schedule = <>
                {/* {eventSchedule !== null && Object.keys(eventSchedule).map((data) => {
                return (
                    <h2 key={eventSchedule[schedules]}>{eventSchedule[schedules].date},</h2>
                    )
                })} */}
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