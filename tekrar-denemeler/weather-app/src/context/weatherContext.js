import cities from "../data/cities.json"
import {createContext, useContext, useState, useEffect} from "react"
import axios from "axios"


export const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {

    const [selectedCity, setSelectedCity] = useState("İstanbul")
    const [weathers, setWeathers] = useState([])

    const key = "d6f16a77953c45078bd154119231902"

    
    useEffect(() => {
        const getData = async() => {
            const { data } = await axios(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selectedCity}&days=7&aqi=no&alerts=no`)
    
            setWeathers(data.forecast.forecastday)
        }
    
        getData()

    }, [selectedCity])
    

    const values = {
        cities,
        selectedCity,
        setSelectedCity,
        weathers,
        setWeathers
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