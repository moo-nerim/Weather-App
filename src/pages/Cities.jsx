import { useEffect, useState } from "react";
import CityList from "../components/CityList";

function Cities() {
    const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities"
    const [cityState, setCityState] = useState([]);

    // hooks
    useEffect(() => {
        console.log('cities component mounted!');
        getCities();
    }, []);

    async function getCities() {
        const cities = await fetch(API_URL).then((res) => res.json());
        console.log(cities);
        setCityState(cities);
    }

    return (
        <div>
            <fieldset id="field_Cities"><legend id="Cities">Cities</legend>
            <p id='API_URL'>{API_URL}</p>
            <CityList cities={cityState}/>
            </fieldset>
        </div>
    );
}

export default Cities;
