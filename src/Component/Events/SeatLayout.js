import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const SeatLayout = (props) => {
    const [seatLayout, setSeatLayout] = useState({});
    const url = `https://apidev.ticketezy.com/events/${props.data}/event_seats`
    useEffect(() => {
        let list = [];
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setSeatLayout(res.data);
        })
    }, [])
    let pricecard = null;
    let seating = null;
    if (seatLayout === null) {
        seating = <>
            <Link className="px-3 py-1 ml-3 text-white add-seat" to={`/events/${props.data}/event_seats`} role="button">Add Details</Link>
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