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
        <div className="container">
          <div className="card w-75">
            <div className="card-header">
              <h2>{author.name}</h2>
            </div>
            <div className="card-body">
              <p className="card-text">
                <b>Username: </b>
                {author.username}
              </p>
              <p className="card-text">
                <b>Website: </b>
                {author.email}
              </p>
              <p className="card-text">
                <b>Phone: </b>
                {author.phone}
              </p>
              <p className="card-text">
                <b>Company: </b>
                {author.company.name}
              </p>
              <p className="card-text">
                <b>Company CatchPhrase: </b>
                {author.company.catchPhrase}
              </p>
              <p className="card-text">
                <b>Company bs:</b> {author.company.bs}
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {author ? (
        <div className="container">
          <MapWithAMarker
            lat={author.address.geo.lat}
            lng={author.address.geo.lng}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `70%` }} />}
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
