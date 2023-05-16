import React from "react";

const Map = ({ location }) => {
  return (
    <div className="map mt-10">
      <div className="google-map">
        <iframe
          src={`http://maps.google.com/maps?q=${location.lat},${location.lng}&z=13&output=embed`}
          height="250"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
