import './App.css';
import axios from 'axios';
import {useState} from "react";

function App() {
    const [countryData, setCountryData] = useState([]);

    async function handleData() {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            // console.log(response.data)
            setCountryData(response.data)
        } catch (e) {
            //errors afhandelen (console en UI)
        } finally {

        }
    }

    return (
        <>
            <button type="button" onClick={handleData}>klik hier</button>
                {countryData.length > 0 && <h1>Eerste land: {countryData[0].name.common} <br />
                    Has a population of {countryData[0].population} people</h1>}
        </>
    )
}



export default App
