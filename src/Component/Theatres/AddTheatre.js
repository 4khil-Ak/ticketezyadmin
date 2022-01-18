import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { TheaterType } from "../../Helpers/TheaterType";
import Axios from "axios";
import Loader from "../../UI/Loader";

const AddTheatre = () => {
    let navigate = useNavigate();
    const url = "https://apidev.ticketezy.com/theatres";
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const [theatreDetails, setTheatreDetails] = useState(
        {
            name: "",
            owner: "",
            mobile: "",
            address: "",
            place: "",
            location: "",
            since: "",
            theatre_type: "",
            pan_number: "",
            gst_number: "",
            aadhar_number: ""
        }
    )
    const onChangeHandler = (event, action) => {
        const tempEventInputs = JSON.parse(JSON.stringify(theatreDetails));
        if (event.target) {
            tempEventInputs[event.target.id] = event.target.value;
        } else if (action) {
            tempEventInputs[action.name] = event.value;
        }
        setTheatreDetails(tempEventInputs);
    };
    const createHandler = () => {
        const tempEventInputs = JSON.parse(JSON.stringify(theatreDetails));
        // tempEventInputs["time"] = new Date().toISOString();
        if (
            theatreDetails.name === "" ||
            theatreDetails.owner === "" ||
            theatreDetails.place === "" ||
            theatreDetails.mobile === "" ||
            theatreDetails.since === "" ||
            theatreDetails.location === "" ||
            theatreDetails.address === "" ||
            theatreDetails.theatre_type === "" ||
            theatreDetails.aadhar_number === "" ||
            theatreDetails.gst_number === "" ||
            theatreDetails.pan_number === ""
        ) {
            setError("Enter valid data !");
        } else if (theatreDetails.name.length < 5) {
            setError("Name is too short (minimum is 5 characters)");
        } else if (theatreDetails.owner.length < 3) {
            setError("Owner is too short (minimum is 3 characters)");
        } else if (theatreDetails.mobile.length !== 10) {
            setError("Enter valid mobile number !");
        } else if (theatreDetails.pan_number.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}/) === null) {
            setError("Enter valid pan number !");
        } else if(theatreDetails.gst_number.length < 15) {
            setError("Enter valid gst number");
        } else if (theatreDetails.aadhar_number.length !== 12) {
            setError("Enter valid aadhar number !");
        } else {
            setLoading(true);
            Axios.post(
                url,
                {
                    theatre: tempEventInputs,
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((resp) => {
                    setLoading(false);
                    navigate("/theaters");
                })
                .catch((error) => {
                    setLoading(false);
                    setError(error.message);
                });
        }
    };
    const cancelHandler = () => {
        navigate("/theaters");
    }
    return (
        <>
            <div className="details p-3" style={{ background: "#fff" }}>
                <h3 className="text-dark p-2">Add Theater</h3>
                <div className="col-12 p-0">
                    {error && <Alert variant="danger">{error}</Alert>}
                </div>
                <div
                    className="d-flex flex-wrap p-2"
                    style={{ background: "var(--secondary)", borderRadius: "8px" }}
                >
                    <div className="col-md-4 row p-2 px-4">
                        <div className="d-flex w-100 flex-column mb-md-3">
                            <label htmlFor="name">Theater Name</label>
                            <input
                                className="m-0 px-2"
                                type="text"
                                id="name"
                                onChange={onChangeHandler}
                                value={theatreDetails.name}
                                placeholder="Enter Theater Name"
                            />
                        </div>
                        <div className="d-flex w-100 flex-column mb-md-3">
                            <label htmlFor="owner">Owner Name</label>
                            <input
                                className="m-0 px-2"
                                type="text"
                                id="owner"
                                onChange={onChangeHandler}
                                value={theatreDetails.owner}
                                placeholder="Enter Owner Name"
                            />
                        </div>
                        <div className="d-flex w-100 flex-column">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                                className="m-0 px-2"
                                type="number"
                                id="mobile"
                                onChange={onChangeHandler}
                                value={theatreDetails.mobile}
                                placeholder="Mobile Number"
                            />
                        </div>
                        <div className="d-flex w-100 flex-column mb-md-3">
                            <label htmlFor="address">Address</label>
                            <textarea
                                className="m-0 px-2"
                                id="address"
                                onChange={onChangeHandler}
                                value={theatreDetails.address}
                                placeholder="Enter Your Address"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 row p-2 px-4">
                        <div className="d-flex w-100 flex-column mb-md-3">
                            <label htmlFor="place">Place</label>
                            <input
                                className="m-0 px-2"
                                type="text"
                                id="place"
                                onChange={onChangeHandler}
                                value={theatreDetails.place}
                                placeholder="Enter Place"
                            />
                        </div>
                        <div className="d-flex w-100 flex-column mb-md-3">
                            <label htmlFor="location">Location</label>
                            <input
                                className="m-0 px-2"
                                type="text"
                                id="location"
                                onChange={onChangeHandler}
                                value={theatreDetails.location}
                                placeholder="Enter Location"
                            />
                        </div>
                        <div className="d-flex w-100 flex-column mb-md-3">
                            <label htmlFor="since">Theater Since</label>
                            <input
                                className="m-0 px-2"
                                type="number"
                                id="since"
                                onChange={onChangeHandler}
                                value={theatreDetails.since}
                                placeholder="Year of foundation"
                            />
                        </div>
                        <div className="d-flex w-100 flex-column">
                            <label htmlFor="type">Theater Type</label>
                            <Select
                                options={TheaterType}
                                // className="m-0 px-2"
                                id="theatre_type"
                                name="theatre_type"
                                value={TheaterType.filter(function (option) {
                                    return option.value === theatreDetails.theatre_type;
                                })}
                                onChange={onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="col-md-4 row p-2 px-4 align-self-start">
                        <div className="d-flex w-100 flex-column mb-md-3">
                            <label htmlFor="pan_number">Pan Number</label>
                            <input
                                className="m-0 px-2"
                                type="text"
                                id="pan_number"
                                onChange={onChangeHandler}
                                value={theatreDetails.pan_number}
                                placeholder="Enter Pan Number"
                            />
                        </div>
                        <div className="d-flex w-100 flex-column">
                            <label htmlFor="gst_number">GST</label>
                            <input
                                className="m-0 px-2"
                                type="text"
                                id="gst_number"
                                onChange={onChangeHandler}
                                value={theatreDetails.gst_number}
                                placeholder="Enter Aadhar Number"
                            />
                        </div>
                        <div className="d-flex w-100 flex-column">
                            <label htmlFor="aadhar_number">Aadhar</label>
                            <input
                                className="m-0 px-2"
                                type="number"
                                id="aadhar_number"
                                onChange={onChangeHandler}
                                value={theatreDetails.aadhar_number}
                                placeholder="Enter Aadhar Number"
                            />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end pt-3">
                    <button
                        className="btn btn-primary mr-2 px-3"
                        type="submit"
                        onClick={createHandler}
                    >
                        Create
                    </button>
                    <button className="btn btn-primary px-3" type="submit" onClick={cancelHandler}>
                        Cancel
                    </button>
                </div>
            </div>
            {loading && <Loader />}
        </>
    )
}

export default AddTheatre;