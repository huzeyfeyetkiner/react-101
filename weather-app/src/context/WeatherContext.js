import { useContext, createContext, useState } from "react";
import cities from "../data/cities.json"
import axios from "axios"

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {

    const key = "52cb0c406e77c3b4de742e25be54c7f0"
    const [selectedCity, setSelectedCity] = useState("İstanbul")

    const getData = () => {
        const selectCity = cities.filter((city) => city.name === selectedCity)[0]

        axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${selectCity.latitude}&lon=${selectCity.longitude}&exclude={part}&appid=${key}`)
        .then(data => data)
        .then(({data}) => console.log(data))
    }
    getData()
    const values = {
        cities,
        selectedCity,
        setSelectedCity,
    }

    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather = () => {
    return useContext(WeatherContext)
}