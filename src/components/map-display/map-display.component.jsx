import React, { useContext } from "react";
import { CityContext } from "../../context/city.context";
import { MapDisplaySection } from "./map-display.styles";


const MapDisplay = () => {
    const { selectCity } = useContext(CityContext);

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
                
            </MapDisplaySection>
        </>
    );
};
export default MapDisplay;