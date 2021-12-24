import React from "react";

const EditModal = (props) => {
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
                  type="number"
                  id="pan"
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
                  placeholder="Enter Aadhar Number"
                />
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
