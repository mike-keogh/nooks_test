import React from "react";
import PropTypes from "prop-types";

function NetworkPage({ data }) {
  console.log("props", data);
  return (
    <div className="h-screen relative">
      <div className="text-l text-left mx-10">{data.title}</div>
      <img
        className="object-cover h-full w-full relative"
        src={data.backgroundImage.url}
      />
    </div>
  );
}

NetworkPage.propTypes = {
  data: PropTypes.object,
};

export default NetworkPage;
