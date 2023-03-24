import React, { useState } from "react";
import { CitiesList, ListItem, SideBarSection } from "./sidebar.styles";
import SearchBox from "../search-box/search-box.component";
import Cities from "../cities-list/cities-list.component";

const SideBar = ({cities, onChangeHandler}) => {
    return(
        <>
            <SideBarSection>
                <div className="header">
                    <h2>
                        Cities
                    </h2>
                    <SearchBox className='search-box' onChangeHandler={onChangeHandler} />
                </div>

                <Cities cities={cities} />
                 
            </SideBarSection>
        </>
    );
};

export default SideBar;