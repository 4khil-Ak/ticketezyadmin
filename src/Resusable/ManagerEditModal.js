import React, { useState } from "react";
import Axios from "axios";
import Loader from "../UI/Loader";
import { Alert } from "react-bootstrap";

const ManagerEditModal = (props) => {
  const url = `https://apidev.ticketezy.com/event_managers/${props.managerDetails.secret}`
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false);
  const [editDetails, setEditDetails] = useState({
    name: props.managerDetails.name,
    companyname: props.managerDetails.company_name,
    email: props.managerDetails.email,
    number: props.managerDetails.mobile,
    account: props.managerDetails.account_number,
    ifsc: props.managerDetails.ifsc_code,
    branch: props.managerDetails.branch_name,
    bank: props.managerDetails.bank_name,
    pan: props.managerDetails.pan_number,
    aadhar: props.managerDetails.aadhar
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
    if (
      editDetails.name === "" ||
      editDetails.companyname === "" ||
      editDetails.email === "" ||
      editDetails.number === "" ||
      editDetails.account === "" ||
      editDetails.ifsc === "" ||
      editDetails.branch === "" ||
      editDetails.bank === "" ||
      editDetails.pan === "" ||
      editDetails.aadhar === ""
    ) {
      setError("Enter valid data !");
    } else if (editDetails.name.match(/^[a-zA-Z ]+$/) === null) {
      setError("Name cannot contain special character");
    } else if (editDetails.companyname.match(/^[a-zA-Z ]+$/) === null) {
      setError("Enter valid company name");
    } else if (editDetails.name.length < 3) {
      setError("Name is too short");
    } else if (
      editDetails.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) ===
      null
    ) {
      setError("Enter valid email !");
    } else if (editDetails.number.length !== 10) {
      setError("Enter valid mobile number !");
    } else if (editDetails.account.length < 9) {
      setError("Account number is too short (minimum is 9 characters)")
    } else if (editDetails.branch.match(/^[a-zA-Z ]+$/) === null) {
      setError("Incorrect Branch Name");
    } else if (editDetails.branch.length < 3) {
      setError("Branch Name is too short (minimum is 3 characters)");
    } else if (editDetails.bank.match(/^[a-zA-Z ]+$/) === null) {
      setError("Enter valid Bank Name");
    } else if (editDetails.bank.length < 3) {
      setError("Bank Name is too short (minimum is 3 characters)");
    } else if (editDetails.pan.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}/) === null) {
      setError("Enter valid pan number !");
    } else if (editDetails.aadhar.length !== 12) {
      setError("Enter valid aadhar number !");
    } else {
      setLoading(true);
      Axios.patch(
        url,
        {
          event_manager: {
            name: editDetails.name,
            company_name: editDetails.companyname,
            pan_number: editDetails.pan,
            aadhar: editDetails.aadhar,
            email: editDetails.email,
            mobile: editDetails.number,
            account_number: editDetails.account,
            ifsc_code: editDetails.ifsc,
            branch_name: editDetails.branch,
            bank_name: editDetails.bank
          }
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      ).then((res) => {
        setLoading(false);
        alert("Upadted Successfully")
        window.location.reload();
      }).catch((error) => {
        setLoading(false);
        if (error.response.data.errors.email !== null && error.response.data.errors.email) {
          setError(error.response.data.errors.email)
        }
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
              <h4 className="m-0">Event Manager Name</h4>
            </div>
          </div>
          <div className="row ">
            <p className="text-dark p-2 w-100">Manager Details</p>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="name">name</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="name"
                  onChange={onChangeHandler}
                  value={editDetails.name}
                  placeholder="Enter Event Manager Name"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="companyname">Company Name</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="companyname"
                  onChange={onChangeHandler}
                  value={editDetails.companyname}
                  placeholder="Enter Company Name"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="email">Email</label>
                <input
                  className="m-0 px-2"
                  type="email"
                  id="email"
                  onChange={onChangeHandler}
                  value={editDetails.email}
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column">
                <label htmlfor="number">Mobile Number</label>
                <input
                  className="m-0 px-2"
                  type="number"
                  id="number"
                  onChange={onChangeHandler}
                  value={editDetails.number}
                  placeholder="Mobile Number"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <p className="text-dark p-2 w-100">Bank Details</p>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="account">Account Number</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="account"
                  onChange={onChangeHandler}
                  value={editDetails.account}
                  placeholder="Enter Account Number"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="ifsc">IFSC</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="ifsc"
                  onChange={onChangeHandler}
                  value={editDetails.ifsc}
                  placeholder="Enter IFSC code"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="branch">Branch Name</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="branch"
                  onChange={onChangeHandler}
                  value={editDetails.branch}
                  placeholder="Enter Branch Name"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column">
                <label htmlfor="bank">Bank Name</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="bank"
                  onChange={onChangeHandler}
                  value={editDetails.bank}
                  placeholder="Enter Bank Name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <p className="text-dark p-2 w-100">Personal Details</p>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column ">
                <label htmlfor="pan">Pan Number</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="pan"
                  onChange={onChangeHandler}
                  value={editDetails.pan}
                  placeholder="Enter Pan Number"
                />
              </div>
            </div>
            <div className="col-md-6 p-2">
              <div className="d-flex w-100 flex-column">
                <label htmlfor="aadhar">Aadhar</label>
                <input
                  className="m-0 px-2"
                  type="text"
                  id="aadhar"
                  onChange={onChangeHandler}
                  value={editDetails.aadhar}
                  placeholder="Enter Aadhar Number"
                />
              </div>
            </div>
          </div>
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

export default ManagerEditModal;
