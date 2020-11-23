import './App.css';
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import mapStyles from './mapStyles';





// function Map() {
//   return (
//     <GoogleMap defaultZoom={10}
//       defaultCenter={{ lat: 45.421532, lng: -75.697189 }} />
//   );
// }

const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
}

const center = {
  lat: 15.1021,
  lng: 17.2812,

};

const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  
}

export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `AIzaSyBniFhD5gyPyOrEm212cVIAYVythPk2JcE`,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";


  
  return (
    <div className="page wrapper">
      <div className="map">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
        ></GoogleMap>
      </div>

      <div className="items">
        <a className="item" rel="noopener noreferrer" target="_blank">
          <p className="item1 ">East African Tour</p>
        </a>

        <a className="item" rel="noopener noreferrer" target="_blank">
          <p onClick={() => alert('show-scroll')} className="item2">West Africa Tour</p>
        </a>

        <a className="item" rel="noopener noreferrer" target="_blank">
          <p className=" item3">South African Tour</p>
        </a>
        <a className="item" rel="noopener noreferrer" target="_blank">
          <p className="item4">North African Tour</p>
        </a>
      </div>
    </div>
  );
}

