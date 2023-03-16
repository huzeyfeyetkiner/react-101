import axios from "axios";
import Loading from "./components/Loading";
import { useEffect, useState } from "react"
import './App.css';
import Tours from "./components/Tours"

function App() {

  const [tourList, setTourList] = useState([])
  const [loading, setLoading] = useState(true)

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

  return (
    <div className="App">
      <Tours tourList = {tourList}/>
      {/* {
        JSON.stringify(tourList)
      } */}
    </div>
  );
}

export default App;
