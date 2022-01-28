import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import Loader from "../../UI/Loader";
import Screens from "./Screens";

const TheaterDetails = () => {
  let params = useParams();
  const url = "https://apidev.ticketezy.com/theatres";
  const screensUrl = `https://apidev.ticketezy.com/theatres/${params.id}/screens`;
  const [screen, setScreen] = useState([]);
  const [singleTheaterDetails, setSingleTheaterDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setSingleTheaterDetails(res.data);
    });
    Axios.get(screensUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setLoading(false);
      setScreen(res.data);
    });
  }, []);

  let ui = null;
  if (singleTheaterDetails === null) {
    ui = <>{loading && <Loader />}</>;
  } else {
    ui = singleTheaterDetails
      .filter((x) => x.secret === params.id)
      .map((data, index) => {
        return (
          <div
            className="details p-3"
            style={{ background: "#fff" }}
            key={index}
          >
            <h4 className="py-2 m-0 text-primary">Theater Details</h4>
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
            <h4 className="py-2 m-0 text-primary">Screens</h4>
            <div className="row">
              <div className="col-sm-6 col-md-3 px-3 py-2 d-flex">
                <div
                  className="card w-100 p-2 justify-content-center box-shadow text-center"
                  style={{
                    background: "var(--primary)",
                    borderRadius: "8px",
                  }}
                >
                  <h5 className="pt-2 m-0 f-600 text-white">
                    Add Screen
                    <br /><span className="fa-2x">+</span>
                  </h5>
                  <Link
                    className="stretched-link"
                    to={`/theaterdetails/${data.secret}/screens`}
                    role="button"
                  >
                  </Link>
                </div>
              </div>
              {screen.length !== 0 &&
                screen.map((value) => {
                  return <Screens details={value} key={value.secret} />;
                })}
            </div>
          </div>
        );
      });
  }
  return ui;
};

export default TheaterDetails;
