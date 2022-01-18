import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Loader from "../../UI/Loader";

const TheaterDetails = () => {
    const url = "https://apidev.ticketezy.com/theatres";
    let params = useParams();
    const [singleTheaterDetails, setSingleTheaterDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setLoading(false);
            setSingleTheaterDetails(res.data);
        })
    }, [])

    let ui = null;
    if (singleTheaterDetails === null) {
        ui = <>
            {loading && <Loader />}
        </>
    } else {
        ui = singleTheaterDetails.filter(x => x.secret === params.id).map((data) => {
            return (
                <div className="details p-3" style={{ background: "#fff" }} key={data.secret}>
                    <h4 className="py-2 m-0 text-primary">
                        Theater Details
                    </h4>
                    <div
                        className="row p-2"
                        style={{ background: "var(--secondary)", borderRadius: "8px" }}
                    >
                        <div className="col-md-4 p-2 px-4">
                            <div className="d-flex w-100 flex-column mb-md-3">
                                <h5 className="p-1 pb-0 m-0 f-600">Theater Name</h5>
                                <p className="p-1 pt-0 pl-3">{data.name}</p>
                            </div>
                            <div className="d-flex w-100 flex-column mb-md-3">
                                <h5 className="p-1 pb-0 m-0 f-600">Owner Name</h5>
                                <p className="p-1 pt-0 pl-3">{data.owner}</p>
                            </div>
                            <div className="d-flex w-100 flex-column mb-md-3">
                                <h5 className="p-1 pb-0 m-0 f-600">Mobile</h5>
                                <p className="p-1 pt-0 pl-3">{data.mobile}</p>
                            </div>
                            <div className="d-flex w-100 flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Address</h5>
                                <p className="p-1 pt-0 pl-3">{data.address}</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 px-4">
                            <div className="d-flex w-100 flex-column mb-md-3">
                                <h5 className="p-1 pb-0 m-0 f-600">Theater Place</h5>
                                <p className="p-1 pt-0 pl-3">{data.place}</p>
                            </div>
                            <div className="d-flex w-100 flex-column mb-md-3">
                                <h5 className="p-1 pb-0 m-0 f-600">Theater Location</h5>
                                <p className="p-1 pt-0 pl-3">{data.location}</p>
                            </div>
                            <div className="d-flex w-100 flex-column mb-md-3">
                                <h5 className="p-1 pb-0 m-0 f-600">Theater Since</h5>
                                <p className="p-1 pt-0 pl-3">{data.since}</p>
                            </div>
                            <div className="d-flex w-100 flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Theater Type</h5>
                                <p className="p-1 pt-0 pl-3">{data.theatre_type}</p>
                            </div>
                        </div>
                        <div className="col-md-4 p-2 px-4 align-self-start">
                            <div className="d-flex w-100 flex-column mb-md-3">
                                <h5 className="p-1 pb-0 m-0 f-600">Pan Number</h5>
                                <p className="p-1 pt-0 pl-3">{data.pan_number}</p>
                            </div>
                            <div className="d-flex w-100 flex-column mb-md-3">
                                <h5 className="p-1 pb-0 m-0 f-600">Gst</h5>
                                <p className="p-1 pt-0 pl-3">{data.gst_number}</p>
                            </div>
                            <div className="d-flex w-100 flex-column">
                                <h5 className="p-1 pb-0 m-0 f-600">Aadhar</h5>
                                <p className="p-1 pt-0 pl-3">{data.aadhar_number}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        ui
    )
}

export default TheaterDetails;
