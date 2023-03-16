import axios from "axios";
import Loading from "./components/Loading";
import { useEffect, useState } from "react"
import './App.css';
import Tours from "./components/Tours"
import Refresh from "./components/Refresh";

function App() {

  const [tourList, setTourList] = useState([])
  const [loading, setLoading] = useState(true)


  const removeTour = (id) => {
    const newTourList = tourList.filter((item) => id !== item.id)

    setTourList(newTourList)
  }

  const getData = async() => {

    try{
      const { data } = await axios("https://course-api.com/react-tours-project")
      setTourList(data)
      setLoading(false)
    }catch(e) {
      setLoading(false)
      console.log(e);
    }    
  }

  useEffect(() => {   
    getData()
  }, [])

  if(loading){
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }

  if(tourList.length === 0) {
    return (
      <div className="App">
        <Refresh getData={getData}/>
      </div>
        
    );
  }

  return (
    <div className="App">
      <Tours tourList = {tourList} removeTour={removeTour} />
      
    </div>
  );
}

export default App;
