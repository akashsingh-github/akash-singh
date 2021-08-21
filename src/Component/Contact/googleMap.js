import React, {useState} from "react";
import GoogleMapReact from 'google-map-react';

function GoogleMap(){
    const defaultProps = {
        center: {
          lat: 19.2096332,
          lng: 73.1270197
        },
        zoom: 11
      };

    return(
        <>
            <div style={{ height: '60vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDmx1zrkCAhxrCVWNXMaSZFt1EmKydYDyE" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                <div
                    lat={59.955413}
                    lng={30.337844}
                    text="Akash"
                />
                </GoogleMapReact>
            </div>
        </>
    )
}
export default GoogleMap;