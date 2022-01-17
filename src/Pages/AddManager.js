import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Loader from "../UI/Loader";

const AddManager = () => {
  const url = "https://apidev.ticketezy.com/event_managers";
  const [loading, setLoading] = useState(false)
  const [managerDetails, setManagerDetails] = useState({
    name: "",
    companyname: "",
    email: "",
    number: "",
    account: "",
    ifsc: "",
    branch: "",
    bank: "",
    pan: "",
    aadhar: ""
  });
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const onChangeHandler = (event) => {
    let val = event.target.value;
    setManagerDetails((prevState) => {
      return {
        ...prevState,
        [event.target.id]: val
      };
    });
  };
  const createHandler = () => {
    if (
      managerDetails.name === "" ||
      managerDetails.companyname === "" ||
      managerDetails.email === "" ||
      managerDetails.number === "" ||
      managerDetails.account === "" ||
      managerDetails.ifsc === "" ||
      managerDetails.branch === "" ||
      managerDetails.bank === "" ||
      managerDetails.pan === "" ||
      managerDetails.aadhar === ""
    ) {
      setError("Enter valid data !");
    } else if (managerDetails.name.match(/^[a-zA-Z ]+$/) === null) {
      setError("Name cannot contain special character");
    } else if (managerDetails.name.length < 3) {
      setError("Name is too short");
    } else if (managerDetails.companyname.match(/^[a-zA-Z ]+$/) === null) {
      setError("Enter valid company name");
    } else if (
      managerDetails.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/) ===
      null
    ) {
      setError("Enter valid email !");
    } else if (managerDetails.number.length !== 10) {
      setError("Enter valid mobile number !");
    } else if (managerDetails.account.length < 9) {
      setError("Account number is too short (minimum is 9 characters)")
    } else if (managerDetails.branch.match(/^[a-zA-Z ]+$/) === null) {
      setError("Incorrect Branch Name");
    } else if (managerDetails.branch.length < 3) {
      setError("Branch Name is too short (minimum is 3 characters)");
    } else if (managerDetails.bank.match(/^[a-zA-Z ]+$/) === null) {
      setError("Enter valid Bank Name");
    } else if (managerDetails.bank.length < 3) {
      setError("Bank Name is too short (minimum is 3 characters)");
    } else if (managerDetails.pan.match(/[A-Z]{5}[0-9]{4}[A-Z]{1}/) === null) {
      setError("Enter valid pan number !");
    } else if (managerDetails.aadhar.length !== 12) {
      setError("Enter valid aadhar number !");
    } else {
      setLoading(true);
      Axios.post(
        url,
        {
          event_manager: {
            name: managerDetails.name,
            company_name: managerDetails.companyname,
            pan_number: managerDetails.pan,
            aadhar: managerDetails.aadhar,
            email: managerDetails.email,
            mobile: managerDetails.number,
            account_number: managerDetails.account,
            ifsc_code: managerDetails.ifsc,
            branch_name: managerDetails.branch,
            bank_name: managerDetails.bank
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
        navigate("/eventsmanager");
      }).catch((error) => {
        setLoading(false);
        if (error.response.data.errors.email !== null && error.response.data.errors.email) {
          setError(error.response.data.errors.email)
        }
      });
    }
  };
  const cancelHandler = () => {
    navigate("/eventsmanager");
  }
  return (
    <>
      <div className="details p-3" style={{ background: "#fff" }}>
        <h3 className="text-dark p-2">Add Manager</h3>
        <div className="col-12 p-0">
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
        <div
          className="d-flex flex-wrap p-2"
          style={{ background: "var(--secondary)", borderRadius: "8px" }}
        >
          <div className="col-md-4 row p-2 px-4">
            <p className="text-dark p-2 w-100">Manager Details</p>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="name">name</label>
              <input
                className="m-0 px-2"
                type="text"
                id="name"
                onChange={onChangeHandler}
                placeholder="Enter Event Manager Name"
              />
            </div>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="companyname">Company Name</label>
              <input
                className="m-0 px-2"
                type="text"
                id="companyname"
                onChange={onChangeHandler}
                placeholder="Enter Company Name"
              />
            </div>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="email">Email</label>
              <input
                className="m-0 px-2"
                type="email"
                id="email"
                onChange={onChangeHandler}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlFor="number">Mobile Number</label>
              <input
                className="m-0 px-2"
                type="number"
                id="number"
                onChange={onChangeHandler}
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="col-md-4 row p-2 px-4">
            <p className="text-dark p-2 w-100">Bank Details</p>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="account">Account Number</label>
              <input
                className="m-0 px-2"
                type="number"
                id="account"
                onChange={onChangeHandler}
                placeholder="Enter Account Number"
              />
            </div>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="ifsc">IFSC</label>
              <input
                className="m-0 px-2"
                type="text"
                id="ifsc"
                onChange={onChangeHandler}
                placeholder="Enter IFSC code"
              />
            </div>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="branch">Branch Name</label>
              <input
                className="m-0 px-2"
                type="text"
                id="branch"
                onChange={onChangeHandler}
                placeholder="Enter Branch Name"
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlFor="bank">Bank Name</label>
              <input
                className="m-0 px-2"
                type="text"
                id="bank"
                onChange={onChangeHandler}
                placeholder="Enter Bank Name"
              />
            </div>
          </div>
          <div className="col-md-4 row p-2 px-4 align-self-start">
            <p className="text-dark p-2 w-100">Personal Details</p>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="pan">Pan Number</label>
              <input
                className="m-0 px-2"
                type="text"
                id="pan"
                onChange={onChangeHandler}
                placeholder="Enter Pan Number"
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlFor="aadhar">Aadhar</label>
              <input
                className="m-0 px-2"
                type="number"
                id="aadhar"
                onChange={onChangeHandler}
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
  );
};

export default AddManager;
