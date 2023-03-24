import React, { useContext, useEffect, useState } from "react"
import CITIES_LIST from "../../citiesList";
import { CityContext } from "../../context/city.context";
import { CitiesList, ListItem } from "./cities-list.styles";


const Cities = ({cities}) => {
    const [active, setActive] = useState(null);
    const { selectCity, setSelectCity } = useContext(CityContext);
    console.log(selectCity);

    
    

    
    return(
        <> 
            <CitiesList className="cities-list">
                <ul>
                    {
                        cities.filter((_, idx) => idx < 20).map((city) => (
                            <li key={city.id} onClick={ () => {setActive(city); setSelectCity(city)}} className={`list-group-item ${active === city ? 'active': ''}`}>
                                <ListItem>
                                    {city.name}
                                </ListItem>
                            </li>
                        ))
                    }                        
                </ul>
            </CitiesList>
        </>       
    );
};

export default Cities;

