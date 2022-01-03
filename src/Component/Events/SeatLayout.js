import React, { useEffect, useState } from "react";
import Axios from "axios";

const SeatLayout = (props) => {
    const [seatLayout, setSeatLayout] = useState({});
    const url = `https://apidev.ticketezy.com/events/${props.data}/event_seats`
    useEffect(() => {
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setSeatLayout(res.data);
        })
    }, [])
    
    let seating = null;
    if (seatLayout === null) {
        seating = <>
            <small className="px-3 py-1 ml-3 text-white" style={{ background: "var(--primary)" }}>Add Details</small>
        </>
    } else if (seatLayout !== null) {
        seating = <>
            <>Success</>
        </>
    }
    return (
        <>
            {seating}
        </>
    )
}

export default SeatLayout;