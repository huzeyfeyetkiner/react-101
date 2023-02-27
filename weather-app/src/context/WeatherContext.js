import { useContext, createContext, useState, useEffect } from "react";
import cities from "../data/cities.json"
import axios from "axios"

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {

    // API key from openweathermap
    const key = "" //buraya api üzerinden veriyi çekmek için gerekli olan key girilecek
    // kendi api keyim limite ulaştığı için kullanmıyorum.
    const [selectedCity, setSelectedCity] = useState("İstanbul")
    const [weathers, setWeathers] = useState([])   

   useEffect(() => {
    //api üzerinden veriyi, seçilen şehrin adına göre almak için yazıldı.
    const selected = cities.filter((city) => city.name === selectedCity )[0]

    // hava durumu bilgilerini api üzerinden axios ile çekmek için kullanılan fonksiyon
    const getData = async() => {
        const { data } = await axios(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selected.name}&days=7&aqi=no&alerts=no`)

        setWeathers(data.forecast.forecastday)
        
    }    
    getData()
    // console.log(weathers);
   },[selectedCity]) 
    
    // context içerisinden diğer componentlardan ulaşılmasını istediğim veriler.
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

// custom hook / contexte ulaşmak için yazılan custom hook
export const useWeather = () => {
    return useContext(WeatherContext)
}