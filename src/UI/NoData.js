import React from "react";

const NoData = () => {
  return (
    <>
      <div className="w-100 text-center">
        <img
          className="no-data w-25 p-2"
          src="/images/nodata.gif"
          alt="nodata"
        />
        <h4 className="text-primary mt-3">Add Managers to view some</h4>
      </div>
    </>
  );
};

export default NoData;