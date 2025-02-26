import './App.css';
import axios from 'axios';
import {useState} from "react";
import map from './assets/world_map.png';
import calculatePopulation from "./helpers/calculatePopulation.jsx";

function App() {
    const [countryData, setCountryData] = useState([]);

    async function handleData() {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            // console.log(response.data)
            const sortedData = response.data.sort((a, b) => a.population - b.population);

            setCountryData(sortedData);
        } catch (e) {

        } finally {

        }
    }

    function getRegionColor(continent) {
        switch (continent) {
            case "Europe":
                return "europe-color";
            case "Asia":
                return "asia-color";
            case "Africa":
                return "africa-color";
            case "South America":
                return "south-america-color";
            case "North America":
                return "north-america-color";
            case "Oceania":
                return "oceania-color";
            case "Antarctica":
                return "antarctica-color";
            default:
                return "default-color"; //
        }
    }

    const [countryInfo, setCountryInfo] = useState([])

    async function handleNewData() {
        try {
            const result = await axios.get("https://restcountries.com/v3.1/all");
            // console.log(result.data);
            const newData = result.data.filter((land) => land.name.common === "Netherlands");
            // console.log(newData);
            // console.log(newData[0].name.common);
            // console.log(newData[0].capital[0]);
            setCountryInfo(newData);
        } catch (e) {
        }
    }

    console.log(countryInfo);
    // console.log(countryInfo[0].name.common);
    return (
        <>
            <img src={map} alt="map"/>
            <h1>Wordl regions</h1>
            <br/>
            <div className="buttons">
                <button type="button" onClick={handleData}>Klik hier</button>
            </div>
            <ul>
                {countryData.map(country => (
                    <li key={country.cca3} className={getRegionColor(country.continents[0])}>
                        {country.name.common} ({country.continents[0]}) <br/>
                        Has a population of {country.population.toLocaleString()} people
                        <br/>
                        <img src={country.flags.png} alt="flag" className="pic"/>
                    </li>
                ))}
            </ul>
            <h1>Search country information</h1>
            <div className="buttons">
                <button type="button" onClick={handleNewData}>Zoek</button>
            </div>
            <div>
                <label htmlFor="searchCountry">
                    <input type="text" id="searchCountry" placeholder="Bijv. Nederland of Peru"/>
                </label>
                <button type="button">Zoek</button>
            </div>
            {countryInfo.map(info => (
                <div key={info.cca2} className="outerCol-searchbar">
                    <div className="innerCol-searchbar">
                        <span className="image-flag">
                        <img src={info.flags.png} alt="flag" className="pic"/>
                        </span>
                        <h1 className="countryName">{info.name.common}</h1>
                    </div>
                    <p>{info.name.common} is situated in {info.subregion} and the capital is {info.capital[0]}.
                        It has a population of {calculatePopulation(info.population)} million people and it borders with {info.borders.length} neighboring
                        countries</p>
                </div>
            ))}
        </>
    );

}

export default App;
