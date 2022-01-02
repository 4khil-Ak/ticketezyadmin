import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const EventDetails = (props) => {
    const [singleEventDetails, setSingleEventDetails] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const list = location.state.details;
        setSingleEventDetails(list);
    }, [])
    console.log(singleEventDetails)
    let ui = null;
    if (singleEventDetails !== null) {
        ui = (<>
            <div className="p-3 bg-white">
                <div className="row">
                    <div className="col-md-4">
                        <div className="d-flex flex-column">
                            <h5 className="p-1 pb-0 m-0 f-600">Title</h5>
                            <p className="p-1 pt-0 pl-3">{singleEventDetails.title}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column">
                            <h5 className="p-1 pb-0 m-0 f-600">Venue</h5>
                            <p className="p-1 pt-0 pl-3">{singleEventDetails.venue}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-column">
                            <h5 className="p-1 pb-0 m-0 f-600">Location</h5>
                            <p className="p-1 pt-0 pl-3">{singleEventDetails.location}</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="d-flex flex-column">
                            <h5 className="p-1 pb-0 m-0 f-600">Description</h5>
                            <p className="p-1 pt-0 pl-3">{singleEventDetails.description}</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex flex-column">
                            <h5 className="p-1 pb-0 m-0 f-600">Language</h5>
                            <p className="p-1 pt-0 pl-3">{singleEventDetails.language}</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex flex-column">
                            <h5 className="p-1 pb-0 m-0 f-600">Duration</h5>
                            <p className="p-1 pt-0 pl-3">{singleEventDetails.duration}</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex flex-column">
                            <h5 className="p-1 pb-0 m-0 f-600">Categories</h5>
                            <p className="p-1 pt-0 pl-3">{singleEventDetails.Categories}</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-flex flex-column">
                            <h5 className="p-1 pb-0 m-0 f-600">Adult Content</h5>
                            <p className="p-1 pt-0 pl-3">{singleEventDetails.adult_content}</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="d-flex flex-column">
                            <h5 className="p-1 pb-0 m-0 f-600">Cast & Crew</h5>
                            <p className="p-1 pt-0 pl-3">{singleEventDetails.cast_and_crew}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
    return (
        ui
    )
}

export default EventDetails;