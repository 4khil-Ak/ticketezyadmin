import React from "react";

const AddManager = () => {
  return (
    <>
      <div className="details p-3" style={{ background: "#fff" }}>
        <h3 className="text-dark p-2">Add Manager</h3>
        <div
          className="d-flex flex-wrap p-2"
          style={{ background: "var(--secondary)", borderRadius: "8px" }}
        >
          <div className="col-md-4 row p-2 px-4">
            <p className="text-dark p-2 w-100">Manager Details</p>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlfor="name">name</label>
              <input
                className="m-0 px-2"
                type="text"
                id="name"
                placeholder="Enter Event Manager Name"
              />
            </div>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlfor="companyname">Company Name</label>
              <input
                className="m-0 px-2"
                type="text"
                id="companyname"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlfor="email">Email</label>
              <input
                className="m-0 px-2"
                type="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlfor="number">Mobile Number</label>
              <input
                className="m-0 px-2"
                type="number"
                id="number"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="col-md-4 row p-2 px-4">
            <p className="text-dark p-2 w-100">Bank Details</p>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlfor="account">Account Number</label>
              <input
                className="m-0 px-2"
                type="text"
                id="account"
                placeholder="Enter Account Number"
              />
            </div>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlfor="ifsc">IFSC</label>
              <input
                className="m-0 px-2"
                type="text"
                id="ifsc"
                placeholder="Enter IFSC code"
              />
            </div>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlfor="branch">Branch Name</label>
              <input
                className="m-0 px-2"
                type="text"
                id="branch"
                placeholder="Enter Branch Name"
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlfor="bank">Bank Name</label>
              <input
                className="m-0 px-2"
                type="text"
                id="bank"
                placeholder="Enter Bank Name"
              />
            </div>
          </div>
          <div className="col-md-4 row p-2 px-4 align-self-start">
            <p className="text-dark p-2 w-100">Personal Details</p>
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlfor="pan">Pan Number</label>
              <input
                className="m-0 px-2"
                type="number"
                id="pan"
                placeholder="Enter Pan Number"
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <label htmlfor="aadhar">Aadhar</label>
              <input
                className="m-0 px-2"
                type="text"
                id="aadhar"
                placeholder="Enter Aadhar Number"
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-end pt-3">
          <button className="btn btn-primary mr-2 px-3" type="submit">
            Create
          </button>
          <button className="btn btn-primary px-3" type="submit">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddManager;
