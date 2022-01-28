import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const SeatLayout = (props) => {
  const [seatLayout, setSeatLayout] = useState(null);
  const [data, setData] = useState([]);

  const url = `https://apidev.ticketezy.com/events/${props.data}/event_seats`;
  useEffect(() => {
    let list = [];
    Axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setSeatLayout(res.data);
      if (res.data !== null) setData(Object.keys(res.data.seats));
    });
  }, []);
  const titleCase = (str) => {
    return str
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  let Seating = null;
  if (seatLayout === null) {
    Seating = (
      <>
        <Link
          className="px-3 py-1 ml-3 text-white add-seat"
          to={`/events/${props.data}/event_seats`}
          role="button"
        >
          Add Details
        </Link>
      </>
    );
  } else {
    Seating = (
      <>
        {seatLayout !== null &&
          data !== null &&
          data.map((value, index) => {
            return (
              <div className="col-md-4 p-2" key={index}>
                <h4 className="w-100 mb-2">{titleCase(value)}</h4>
                <p className="text-danger">
                  Price - {seatLayout.price_card[value]}
                </p>
                <p className="text-danger">
                  Available Seats - {seatLayout.seats[value].available_seats}
                </p>
                <p className="text-danger">
                  Total Seats - {seatLayout.seats[value].total_seats}
                </p>
              </div>
            );
          })}
      </>
    );
  }
  return <>{Seating}</>;
};

export default SeatLayout;
