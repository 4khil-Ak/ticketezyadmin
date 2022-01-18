import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const SeatLayout = (props) => {
    const [seatLayout, setSeatLayout] = useState(null);
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
    let Seating = null;
    if (seatLayout === null) {
        Seating = <>
            <Link className="px-3 py-1 ml-3 text-white add-seat" to={`/events/${props.data}/event_seats`} role="button">Add Details</Link>
        </>
    } else {
        Seating = <>
            <div className="col-md-4 p-2">
                <h4 className="w-100 mb-2">First Class</h4>
                <p className="text-danger">Price - {seatLayout.price_card.first_class}</p>
                <p className="text-danger">Available Seats - {seatLayout.seats.first_class.available_seats}</p>
                <p className="text-danger">Total Seats - {seatLayout.seats.first_class.total_seats}</p>
            </div>
            <div className="col-md-4 p-2">
                <h4 className="w-100 mb-2">Second Class</h4>
                <p className="text-danger">Price - {seatLayout.price_card.second_class}</p>
                <p className="text-danger">Available Seats - {seatLayout.seats.second_class.available_seats}</p>
                <p className="text-danger">Total Seats - {seatLayout.seats.second_class.total_seats}</p>
            </div>
        </>
    }
    return (
        <>
            {seatLayout && Seating}
        </>
    )
}

export default SeatLayout;