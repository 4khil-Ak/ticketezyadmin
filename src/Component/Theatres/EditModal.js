import React, { useState } from "react";
import Axios from "axios";
import Select from "react-select";
import { TheaterType } from "../../Helpers/TheaterType";
import Loader from "../../UI/Loader";
import { Alert } from "react-bootstrap";

const EditModal = (props) => {
  const url = `https://apidev.ticketezy.com/theatres/${props.theatreDetails.secret}/update`
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);
  const [type, setType] = useState(TheaterType.filter(x => x.value === props.theatreDetails.theatre_type));
  const [editDetails, setEditDetails] = useState({
    name: props.theatreDetails.name,
    owner: props.theatreDetails.owner,
    mobile: props.theatreDetails.mobile,
    address: props.theatreDetails.address,
    place: props.theatreDetails.place,
    location: props.theatreDetails.location,
    since: props.theatreDetails.since,
    theatre_type: props.theatreDetails.theatre_type
    // pan_number: props.theatreDetails.pan_number,
    // gst_number: props.theatreDetails.gst_number,
    // aadhar_number: props.theatreDetails.aadhar_number
  })
  const onChangeHandler = (event, action) => {
    const tempEditDetails = JSON.parse(JSON.stringify(editDetails));
    if (event.target) {
      tempEditDetails[event.target.id] = event.target.value;
    } else if (action) {
      tempEditDetails[action.id] = event.value;
    }
    setEditDetails(tempEditDetails)
  };
  const updateHandler = () => {
    editDetails.theatre_type = type.value;
    const tempEditDetails = JSON.parse(JSON.stringify(editDetails));
    if (
      editDetails.name === "" ||
      editDetails.owner === "" ||
      editDetails.place === "" ||
      editDetails.mobile === "" ||
      editDetails.since === "" ||
      editDetails.location === "" ||
      editDetails.address === "" ||
      editDetails.theatre_type === ""
    ) {
      setError("Enter valid data !");
    } else if (editDetails.name.length < 5) {
      setError("Name is too short (minimum is 5 characters)");
    } else if (editDetails.owner.length < 3) {
      setError("Owner is too short (minimum is 3 characters)");
    } else if (editDetails.mobile.length !== 10) {
      setError("Enter valid mobile number !");
    } else {
      setLoading(true);
      Axios.patch(
        url,
        {
          theatre: tempEditDetails
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }
      ).then((res) => {
        setLoading(false);
        alert("Upadted Successfully")
        window.location.reload();
      }).catch((updateerror) => {
        setLoading(false);
        alert("A network error occured/nTry again later");
      });
    }
  };

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
              onClick={props.onCloseHandler}
            >
              Close&ensp;&ensp;<i className="fa fa-close"></i>
            </div>
            <div className="d-flex align-items-center ml-auto p-2">
              <h4 className="m-0">{editDetails.name}</h4>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="name">name</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="name"
                  onChange={onChangeHandler}
                  value={editDetails.name}
                  placeholder="Enter Theater Name"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="owner">Owner Name</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="owner"
                  onChange={onChangeHandler}
                  value={editDetails.owner}
                  placeholder="Enter Owner Name"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="mobile">Mobile</label>
                <input
                  className="m-0 px-2"
                  type="number"
                  id="mobile"
                  onChange={onChangeHandler}
                  value={editDetails.mobile}
                  placeholder="Enter Mobile Number"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column">
                <label htmlfor="address">Address</label>
                <textarea
                  className="m-0 px-2"
                  id="address"
                  onChange={onChangeHandler}
                  value={editDetails.address}
                  placeholder="Mobile Number"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlFor="place">Place</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="place"
                  onChange={onChangeHandler}
                  value={editDetails.place}
                  placeholder="Enter Place"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlFor="location">Location</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="location"
                  onChange={onChangeHandler}
                  value={editDetails.location}
                  placeholder="Enter Location"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlFor="since">Theater Since</label>
                <input
                  className="m-0 px-2"
                  type="number"
                  id="since"
                  onChange={onChangeHandler}
                  value={editDetails.since}
                  placeholder="Year of foundation"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column">
                <label htmlFor="type">Theater Type</label>
                <Select
                  options={TheaterType}
                  // className="m-0 px-2"
                  id="theatre_type"
                  name="theatre_type"
                  value={type}
                  onChange={setType}
                />
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlFor="pan_number">Pan Number</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="pan_number"
                  onChange={onChangeHandler}
                  value={editDetails.pan_number}
                  placeholder="Enter Pan Number"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column">
                <label htmlFor="gst_number">GST</label>
                <input
                  className="m-0 px-2"
                  type="number"
                  id="gst_number"
                  onChange={onChangeHandler}
                  value={editDetails.gst_number}
                  placeholder="Enter Aadhar Number"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column">
                <label htmlFor="aadhar_number">Aadhar</label>
                <input
                  className="m-0 px-2"
                  type="number"
                  id="aadhar_number"
                  onChange={onChangeHandler}
                  value={editDetails.aadhar_number}
                  placeholder="Enter Aadhar Number"
                />
              </div>
            </div>
          </div> */}
          <div className="row py-1">
            {error && <Alert variant="danger">{error}</Alert>}
          </div>
          <div className="row justify-content-end pt-3">
            <button className="btn btn-primary mr-2" type="submit" onClick={updateHandler}>
              Save
            </button>
            <button className="btn btn-primary" type="submit" onClick={props.onCloseHandler}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default EditModal;
