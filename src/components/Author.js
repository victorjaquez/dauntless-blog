import React from "react";
import { connect } from "react-redux";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import "../App.css";

const MapWithAMarker = withGoogleMap(({ lat, lng }) => (
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: parseInt(lat), lng: parseInt(lng) }}
  >
    <Marker position={{ lat: parseInt(lat), lng: parseInt(lng) }} />
  </GoogleMap>
));

const Author = props => {
  let author = props.authors.filter(
    author => author.id == props.match.params.id
  )[0];

  return (
    <div>
      {author ? (
        <div className="card">
          <div className="card-header">{author.name}</div>
          <div className="card-body">
            <p className="card-text">Username: {author.username}</p>
            <p className="card-text">
              Website:
              {author.email}
            </p>
            <p className="card-text">
              Phone:
              {author.phone}
            </p>
            <p className="card-text">
              Company:
              {author.company.name}
            </p>
            <p className="card-text">
              Company CatchPhrase:
              {author.company.catchPhrase}
            </p>
            <p className="card-text">Company bs: {author.company.bs}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      {author ? (
        <div>
          <MapWithAMarker
            lat={author.address.geo.lat}
            lng={author.address.geo.lng}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `50%` }} />}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { authors: state.authors };
};

export default connect(
  mapStateToProps,
  null
)(Author);
