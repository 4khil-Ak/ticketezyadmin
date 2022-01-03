import React from "react";

const AddPriceCard = () => {
  return (
    <>
      <div className="details p-3" style={{ background: "#fff" }}>
        <h3 className="text-dark p-2">Add Price Card !</h3>
        <div
          className="d-flex flex-column p-4"
          style={{ background: "var(--secondary)", borderRadius: "8px" }}
        >
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
        </div>
      </div>
    </>
  );
};

export default AddPriceCard;
