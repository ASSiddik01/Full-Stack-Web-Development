import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 13.791599,
    lng: 90389099
};


const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;