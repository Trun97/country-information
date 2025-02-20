import './App.css';
import axios from 'axios';
import {useState} from "react";

function App() {
    const [data, setData] = useState([]);

    async function handleData() {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags");
            console.log(response.data)
            setData(response.data)
        } catch (e) {
            //errors afhandelen (console en UI)
        } finally {

        }
    }

    return (
        <>
            <button type="button" onClick={handleData}>klik hier</button>
        </>
    )
}

export default App
