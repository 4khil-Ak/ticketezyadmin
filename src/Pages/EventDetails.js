import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Loader from "../UI/Loader";
import SeatLayout from "../Component/Events/SeatLayout";
import EventSchedule from "../Component/Events/EventSchedule";

const EventDetails = (props) => {
    let url = "https://apidev.ticketezy.com/events_list";
    let params = useParams();
    const [singleEventDetails, setSingleEventDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setLoading(false);
            setSingleEventDetails(res.data);
        })
    }, [])
    let ui = null;
    if (singleEventDetails === null) {
        ui = <>
            {loading && <Loader />}
        </>
    } else {
        ui = singleEventDetails.filter(x => x.secret === params.id).map((data) => {
            return (
                <div className="p-3 bg-white" key={data.secret}>
                    <h6 className="py-2 m-0 text-primary">Event Details</h6>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-flex flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Title</h5>
                                <p className="p-1 pt-0 pl-3">{data.title}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Venue</h5>
                                <p className="p-1 pt-0 pl-3">{data.venue}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Location</h5>
                                <p className="p-1 pt-0 pl-3">{data.location}</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="d-flex flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Description</h5>
                                <p className="p-1 pt-0 pl-3">{data.description}</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Language</h5>
                                <p className="p-1 pt-0 pl-3 text-capitalize">{data.language}</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Duration</h5>
                                <p className="p-1 pt-0 pl-3">{data.duration}</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Categories</h5>
                                <p className="p-1 pt-0 pl-3 text-capitalize">{data.categories.slice(2,length-3)}</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Adult Content</h5>
                                <p className="p-1 pt-0 pl-3">{data.adult_content ? "Yes" : "No"}</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="d-flex flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Cast & Crew</h5>
                                <p className="p-1 pt-0 pl-3">{data.cast_and_crew}</p>
                            </div>
                        </div>
                    </div>
                    <h6 className="py-2 mb-1 text-primary">Seat Layout & Price Card</h6>
                    <div className="row mb-3">
                        <SeatLayout data={data.secret} />
                    </div>
                    <h6 className="py-2 mb-1 text-primary">Event Schedule</h6>
                    <div className="row">
                        <EventSchedule data={data.secret} />
                    </div>
                </div>
            )
        })
    }
    console.log()
    return (
        ui
    )
}

export default EventDetails;