import React, { useState } from "react";
import Select from "react-select";
import { LanguageOptions } from "../Helpers/LanguageOptions";
import { CategoryOptions } from "../Helpers/CategoryOptions";
import { AdultOptions } from "../Helpers/AdultOptions";
import { EventsManager } from "../Helpers/EventsManager";
import { axiosInstance, serviceUrl } from "../Service/utilities";

const AddEvent = () => {
  const [image, setImage] = useState(null);
  const [eventInputs, setEventInputs] = useState({
    title: "",
    description: "",
    time: "",
    venue: "",
    location: "",
    language: "",
    categories: "",
    duration: 0,
    adult_content: false,
  });

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

  const handleChange = (event, action) => {
    const tempEventInputs = JSON.parse(JSON.stringify(eventInputs));
    if (event.target) {
      tempEventInputs[event.target.name] = event.target.value;
    } else if (action) {
      tempEventInputs[action.name] = event.value;
      // tempEventInputs[action.name] = event;
    }
    setEventInputs(tempEventInputs);
  };

  const handleSubmit = () => {
    const tempEventInputs = JSON.parse(JSON.stringify(eventInputs));
    tempEventInputs["time"] = new Date().toISOString();
    axiosInstance
      .post(
        `${serviceUrl}event_managers/b774199413fabd8593a05c3f336efd08/events`,
        {
          event: tempEventInputs,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                    name="uploadimg"
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
                  <input
                    className="px-2 m-0"
                    type="text"
                    id="title"
                    name="title"
                    value={eventInputs.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="venue">Venue</label>
                  <input
                    className="px-2 m-0"
                    type="venue"
                    id="venue"
                    name="venue"
                    value={eventInputs.venue}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-5 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="location">Location</label>
                  <input
                    className="px-2 m-0"
                    type="text"
                    id="location"
                    name="location"
                    value={eventInputs.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-3 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="duration">Duration</label>
                  <input
                    type="number"
                    id="duration"
                    name="duration"
                    className="px-2 m-0"
                    value={eventInputs.duration}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-12 p-2">
                <div className="d-flex flex-column" style={{ height: "100%" }}>
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="m-0"
                    id="description"
                    name="description"
                    style={{
                      height: "inherit",
                      resize: "none",
                      overflow: "auto",
                    }}
                    value={eventInputs.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-12 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="categories">Category</label>
                  <Select
                    options={CategoryOptions}
                    id="categories"
                    name="categories"
                    value={CategoryOptions.filter(function (option) {
                      return option.value === eventInputs.categories;
                    })}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-5 p-2">
                <div className="d-flex flex-column">
                  <label htmlFor="language">Language</label>
                  <Select
                    options={LanguageOptions}
                    id="language"
                    name="language"
                    value={LanguageOptions.filter(function (option) {
                      return option.value === eventInputs.language;
                    })}
                    onChange={handleChange}
                  />
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
                  <Select
                    options={AdultOptions}
                    id="adult_content"
                    name="adult_content"
                    value={AdultOptions.filter(function (option) {
                      return option.value === eventInputs.adult_content;
                    })}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <label className="mb-2">Event Speakers</label>
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
          <button
            className="btn btn-primary mr-2 px-3"
            type="button"
            onClick={handleSubmit}
          >
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
