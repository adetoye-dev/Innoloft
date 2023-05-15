import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ location }) => {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location}
          defaultZoom={0}
        >
          {/* <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
