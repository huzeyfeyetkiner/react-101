import { useContext, createContext, useState, useEffect } from "react";
import cities from "../data/cities.json"
import axios from "axios"

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {

    // API key from openweathermap
    const key = "52cb0c406e77c3b4de742e25be54c7f0"
    const [selectedCity, setSelectedCity] = useState("İstanbul")
    const [weathers, setWeathers] = useState([])

    const selected = cities.filter((city) => city.name === selectedCity )[0]
    // console.log(selected.id)

   

   useEffect(() => {
    const getData = async() => {
        const { data } = await axios(`https://api.openweathermap.org/data/3.0/onecall?lat=${selected.latitude}&lon=${selected.longitude}&exclude={part}&appid=${key}`)

        console.log(data)
    }
    getData()
   },[])
    

    const values = {
        cities,
        selectedCity,
        setSelectedCity,
        weathers,
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