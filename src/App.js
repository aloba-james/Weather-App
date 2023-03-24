import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import CITIES_LIST from './citiesList';
import MapDisplay from './components/map-display/map-display.component';
import SideBar from './components/sidebar/siderbar.component';
import { CityContext } from './context/city.context';

function App() {
  const [cities, setCities] = useState([]);
  const [searchField, setSearchField] = useState(''); 
  const [filteredCities, setFilterCities] = useState(cities);
  const { selectCity } = useContext(CityContext);
  console.log(selectCity);


  useEffect(
    () => {
      setCities(CITIES_LIST);
    },
  []);

  useEffect(
    () => {
      const newFilterCities = cities.filter((city) => {
        return city.name.toLocaleLowerCase().includes(searchField);
      });
      setFilterCities(newFilterCities);
    },
  [cities, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  

  return (
    <div className="App">
      
      <SideBar cities={filteredCities} onChangeHandler={onSearchChange}/>
      
      <MapDisplay />
      
    </div>
  );
}

export default App;
