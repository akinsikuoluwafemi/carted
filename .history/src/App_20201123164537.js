import './App.css';

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

