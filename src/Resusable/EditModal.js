import React, { useState } from "react";
import Select from "react-select";
import { LanguageOptions } from "../Helpers/LanguageOptions";
import { CategoryOptions } from "../Helpers/CategoryOptions";
import { AdultOptions } from "../Helpers/AdultOptions";
import { EventsManager } from "../Helpers/EventsManager";

const EditModal = (props) => {
  // const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <>
      <div className="backdrop"></div>
      <div className="details edit-modal p-2 col-11 col-sm-8 col-md-6">
        <div className="d-flex flex-column">
          <div className="row my-2">
            <div
              className="d-flex back align-items-center px-3 py-1"
              style={{
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={props.editModal}
            >
              Close&ensp;&ensp;<i className="fa fa-close"></i>
            </div>
            <div className="d-flex align-items-center ml-auto p-2">
              <h4 className="m-0">Title of the Events Goes Here</h4>
            </div>
          </div>
          <div
            className="banner-image w-100"
            style={{ height: "250px", overflow: "hidden" }}
          >
            <img className="w-100" src="/images/events.png" alt="banner" />
          </div>
          <div className="row">
            <div className="col-md-6 p-2">
              <div className="d-flex flex-column mb-3">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="venue">Venue</label>
                <input type="venue" id="title" />
              </div>
            </div>
            <div className="col-md-6 p-2" style={{ height: "inherit" }}>
              <div className="d-flex flex-column" style={{ height: "100%" }}>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  style={{
                    height: "inherit",
                    resize: "none",
                    overflow: "auto"
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 p-2" style={{ height: "inherit" }}>
              <div className="d-flex flex-column" style={{ height: "100%" }}>
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  style={{ height: "inherit" }}
                />
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="d-flex flex-column">
                <label>Event Manager</label>
                <Select options={EventsManager} />
              </div>
            </div>
            <div className="col-md-3 p-2" style={{ height: "inherit" }}>
              <div className="d-flex flex-column" style={{ height: "100%" }}>
                <label htmlFor="duration">Duration</label>
                <input
                  type="number"
                  id="duration"
                  className="px-2"
                  style={{ height: "inherit" }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 p-2">
              <div className="d-flex flex-column">
                <label htmlFor="category">Category</label>
                <Select isMulti options={CategoryOptions} id="category" />
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div className="d-flex flex-column">
                <label htmlFor="language">Language</label>
                <Select isMulti options={LanguageOptions} id="language" />
              </div>
            </div>
            <div className="col-md-3 p-2">
              <div className="d-flex flex-column">
                <label htmlFor="adult">Adult Content</label>
                <Select options={AdultOptions} id="adult" />
              </div>
            </div>
          </div>
          <div className="w-100 p-2">
            <label className="mb-2">Price Card & Seatings</label>
            <div className="row py-1 align-items-center mb-3">
              <div className="d-flex align-items-center col-12 col-lg-3 p-0 pr-3 text-right">
                <label className="special">First Class</label>
                &ensp;<i className="fa fa-minus text-danger cursor-pointer"></i>
              </div>
              <div className="col-lg-1 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="firstprice"
                  placeholder="Price"
                />
                <small className="tagger">&ensp;</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="firstcgst"
                  placeholder="cgst"
                />
                <small className="tagger">cgst</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="firstsgst"
                  placeholder="sgst"
                />
                <small className="tagger">sgst</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="firsttotalseats"
                  placeholder="Total"
                />
                <small className="tagger">total</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="firstavailableseats"
                  placeholder="Available"
                />
                <small className="tagger">available</small>
              </div>
            </div>
            <div className="row py-1 align-items-center mb-3">
              <div className="d-flex align-items-center col-lg-3 p-0 pr-3 text-right">
                <label className="special">Second Class</label>
                &ensp;
                <i className="fa fa-minus text-danger  cursor-pointer"></i>
              </div>
              <div className="col-lg-1 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="secondprice"
                  placeholder="Price"
                />
                <small className="tagger">&ensp;</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="secondcgst"
                  placeholder="cgst"
                />
                <small className="tagger">cgst</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="secondsgst"
                  placeholder="sgst"
                />
                <small className="tagger">sgst</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="secondtotalseats"
                  placeholder="Total"
                />
                <small className="tagger">total</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="secondavailableseats"
                  placeholder="Available"
                />
                <small className="tagger">available</small>
              </div>
            </div>
            <div className="row py-1 align-items-center">
              <div className="d-flex align-items-center col-lg-3 p-0 pr-3 text-right">
                <label className="special">Third Class</label>
                &ensp;<i className="fa fa-minus text-danger cursor-pointer"></i>
              </div>
              <div className="col-lg-1 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="thirdprice"
                  placeholder="Price"
                />
                <small className="tagger">&ensp;</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="thirdcgst"
                  placeholder="cgst"
                />
                <small className="tagger">cgst</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="thirdsgst"
                  placeholder="sgst"
                />
                <small className="tagger">sgst</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="thirdtotalseats"
                  placeholder="Total"
                />
                <small className="tagger">total</small>
              </div>
              <div className="col-lg-2 px-1">
                <input
                  className="w-100"
                  type="number"
                  id="thirdavailableseats"
                  placeholder="Available"
                />
                <small className="tagger">available</small>
              </div>
            </div>
          </div>
          <div className="row">
            <label className="w-100 mb-2">Show Schedule</label>
            <div className="row w-100 p-2 align-items-center">
              <input className="col-12 col-md-auto" type="date" />
              &ensp;
              <input className="col-6 col-md-auto" type="time" />
              &ensp;
              <input className="col-6 col-md-auto" type="time" />
              <i className="ml-auto fa fa-trash text-danger cursor-pointer"></i>
            </div>
            <div className="row w-100 p-2 align-items-center">
              <input className="col-12 col-md-auto" type="date" />
              &ensp;
              <input className="col-6 col-md-auto" type="time" />
              <i className="ml-auto fa fa-trash text-danger cursor-pointer"></i>
            </div>
          </div>
          <div className="row">
            <label className="w-100 mb-2">Event Organizers</label>
            <div className="row">
              <div className="col-sm-2 p-1">
                <input className="w-100 px-2" type="text" value="Akhil" />
              </div>
              <div className="col-sm-2 p-1">
                <input className="w-100 px-2" type="text" value="Arun" />
              </div>
              <div className="col-sm-2 p-1">
                <input className="w-100 px-2" type="text" value="Sujith" />
              </div>
              <div className="col-sm-2 p-1">
                <input className="w-100 px-2" type="text" value="Sujith" />
              </div>
              <div className="col-sm-2 p-1">
                <input className="w-100 px-2" type="text" value="Sujith" />
              </div>
            </div>
          </div>
          <div className="row justify-content-end pt-3">
            <button className="btn btn-primary mr-2" type="submit">
              Save
            </button>
            <button className="btn btn-primary" type="submit">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
