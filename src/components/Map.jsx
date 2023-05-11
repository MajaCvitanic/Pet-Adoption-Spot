import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
	width: "450px",
	height: "400px",
};

const center = {
	lat: 43.51144,
	lng: 16.469339,
};

const Map = () => {
	return (
		<LoadScript googleMapsApiKey="AIzaSyBEn7-L140s6qsNFIo70stDs6fwdjmEybo">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
