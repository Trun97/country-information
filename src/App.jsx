import './App.css';
import axios from 'axios';
import {useState} from "react";

function App() {
    const [countryData, setCountryData] = useState([]);

    async function handleData() {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            console.log(response.data)
            const sortedData = response.data.sort((a, b) => a.population - b.population); // Sorteer op populatie

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


    return (
        <>
            <button type="button" onClick={handleData}>Klik hier</button>

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
        </>
    );

}
export default App
