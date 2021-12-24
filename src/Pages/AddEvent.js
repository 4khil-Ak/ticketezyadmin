import React, { useState } from "react";
import Select from "react-select";
import { LanguageOptions } from "../Helpers/LanguageOptions";
import { CategoryOptions } from "../Helpers/CategoryOptions";
import { AdultOptions } from "../Helpers/AdultOptions";
import { EventsManager } from "../Helpers/EventsManager";

const AddEvent = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  let Image = "";
  if (image !== null) {
    Image = (
      <>
        <img
          src={image}
          className="position-relative"
          alt="preview"
          style={{ zIndex: "2" }}
        />
      </>
    );
  } else {
    Image = (
      <>
        <small>Upload a imgae to continue</small>
      </>
    );
  }
  return (
    <>
      <div className="details p-3" style={{ background: "#fff" }}>
        <h3 className="text-dark p-2">Create Event !</h3>
        <div
          className="d-flex flex-column p-4"
          style={{ background: "var(--secondary)", borderRadius: "8px" }}
        >
          <div className="row">
            <div className="col-md-6 d-flex flex-column p-0 flex-wrap">
              <div
                className="col-1 row p-0 align-items-center"
                style={{ maxWidth: "100%" }}
              >
                <p className="f-600" style={{ letterSpacing: "1px" }}>
                  Add Event Banner Image and Gallery Images
                </p>
              </div>
              <div className="col-6 row p-2" style={{ maxWidth: "100%" }}>
                <div
                  className="position-relative w-100 banner"
                  style={{ height: "300px", overflow: "hidden" }}
                >
                  <input
                    type="file"
                    onChange={onImageChange}
                    className="filetype"
                    id="uploadimg"
                  />
                  <label className="uplabel" htmlFor="uploadimg">
                    <i className="fa fa-upload fa-3x"></i>
                  </label>
                  {Image}
                </div>
              </div>
              <div className="col-5 row p-0" style={{ maxWidth: "100%" }}></div>
            </div>
            <div className="col-md-6 row p-0">
              <div className="col-12 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="title">Title</label>
                  <input className="px-2 m-0" type="text" id="title" />
                </div>
              </div>
              <div className="col-md-4 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="venue">Venue</label>
                  <input className="px-2 m-0" type="venue" id="venue" />
                </div>
              </div>
              <div className="col-md-5 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="location">Location</label>
                  <input className="px-2 m-0" type="text" id="location" />
                </div>
              </div>
              <div className="col-md-3 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="duration">Duration</label>
                  <input type="number" id="duration" className="px-2 m-0" />
                </div>
              </div>
              <div className="col-md-12 p-2">
                <div className="d-flex flex-column" style={{ height: "100%" }}>
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="m-0"
                    id="description"
                    style={{
                      height: "inherit",
                      resize: "none",
                      overflow: "auto"
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="col-12 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="category">Category</label>
                  <Select isMulti options={CategoryOptions} id="category" />
                </div>
              </div>
              <div className="col-md-5 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="language">Language</label>
                  <Select isMulti options={LanguageOptions} id="language" />
                </div>
              </div>
              <div className="col-md-4 p-2">
                <div className="d-flex flex-column">
                  <label>Event Manager</label>
                  <Select options={EventsManager} />
                </div>
              </div>
              <div className="col-md-3 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="adult">Adult Content</label>
                  <Select options={AdultOptions} id="adult" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 p-2">
            <label className="mb-2">Price Card & Seatings</label>&ensp;
            <i className="fas fa-plus text-success cursor-pointer"></i>
            <div className="row p-2 align-items-center">
              <div className="d-flex align-items-center col-12 col-lg-3 p-0 pr-3 text-right">
                <input
                  type="text"
                  className="special border-0 m-0 font-weight-bold"
                  placeholder="Enter Class Name"
                  style={{ letterSpacing: "1px" }}
                />
                &ensp;<i className="fa fa-minus text-danger cursor-pointer"></i>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100 m-0 px-2"
                  type="number"
                  id="firstprice"
                  placeholder="Price"
                />
                <small className="tagger">Price</small>
              </div>
              <div className="col-lg-1 px-1">
                <input
                  className="w-100 m-0 px-2"
                  type="number"
                  id="firstcgst"
                  placeholder="cgst"
                />
                <small className="tagger">cgst</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100 m-0 px-2"
                  type="number"
                  id="firstsgst"
                  placeholder="sgst"
                />
                <small className="tagger">sgst</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100 m-0 px-2"
                  type="number"
                  id="firsttotalseats"
                  placeholder="Total"
                />
                <small className="tagger">total</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100 m-0 px-2"
                  type="number"
                  id="firstavailableseats"
                  placeholder="Available"
                />
                <small className="tagger">available</small>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <label className="mb-2">Show Schedule</label>
            <i className="fas fa-plus text-success cursor-pointer mx-2 my-1"></i>
            <div className="row w-100 p-2 align-items-center">
              <input className="col-12 col-md-auto" type="date" />
              &ensp;
              <input className="col-6 col-md-auto px-2 mr-2" type="time" />
              <i className="fas fa-plus text-success cursor-pointer mx-2 my-1"></i>
              <i className="ml-auto fa fa-trash text-danger cursor-pointer"></i>
            </div>
          </div>
          <div className="row p-2">
            <label className="mb-2">Event Organizers</label>
            <i className="fas fa-plus text-success cursor-pointer mx-2 my-1"></i>
            <div className="row w-100">
              <div className="col-sm-2 p-1">
                <input
                  className="w-100 px-2 m-0"
                  type="text"
                  placeholder="Enter Organizer"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-end pt-3">
          <button className="btn btn-primary mr-2 px-3" type="submit">
            Save
          </button>
          <button className="btn btn-primary px-3" type="submit">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
