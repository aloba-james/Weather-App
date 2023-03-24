import { createContext, useContext, useEffect, useState } from "react";

export const CityContext = createContext({
    selectCity: null,
    setSelectCity: () => null
});

export const CityProvider = ({children}) => {
    const [selectCity, setSelectCity] = useState(null);
    const value = {selectCity, setSelectCity};

    useEffect(
        () => {
            setSelectCity(selectCity);
        }, [selectCity]
    );

    return <CityContext.Provider value={value}>
        {children}
    </CityContext.Provider>
};


