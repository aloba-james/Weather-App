import React, { useContext, useState } from "react";
import { CityContext } from "../../context/city.context";
import { MapDisplaySection } from "./map-display.styles";
import  Map, {
    Marker,
    NavigationControl,
    Popup,
    FullscreenControl,
    GeolocateControl,
  }  from "react-map-gl";


const MapDisplay = () => {
    const { selectCity } = useContext(CityContext);

  const [lng, setLng] = useState(54.37585762735543);
  const [lat, setLat] = useState(24.45677614934833);

    return(
        <>
            <MapDisplaySection>
                <h2>
                    Map
                </h2>

                {
                    selectCity ? 
                        (
                            <h3>
                                {selectCity.name}
                            </h3>
                        ) 
                    : ''
                }

                <div>
                    {console.log(process.env.REACT_APP_MAP_KEY)}
                    <Map
                        mapboxAccessToken='pk.eyJ1IjoicHJvdGVhbi1zbGVkZ2UiLCJhIjoiY2xmbHhkbzRmMDJnYTNxbWhtODNiNW92aiJ9.0AsyD13nrPBFcsda3PIqKg'
                        style={{
                        width: "500px",
                        height: "500px",
                        borderRadius: "15px",
                        border: "2px solid red",
                        }}
                        initialViewState={{
                        longitude: lng,
                        latitude: lat,
                        }}
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                    >
                        {
                            selectCity ? (
                                <Marker longitude={selectCity.lng} latitude={selectCity.lat} />
                            )
                            :
                            ""
                        }
                        <NavigationControl position="bottom-right" />
                        <FullscreenControl />

                        <GeolocateControl />
                    </Map>

                </div>
                
            </MapDisplaySection>
        </>
    );
};
export default MapDisplay;