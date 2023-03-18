import { useEffect, useState } from "react"
import axios from "axios"
import Loading from "./components/Loading"
import Context from "./components/Context"
import "./App.css"

function App() {

  const [experience, setExperience] = useState([])
  const [jobValue, setJobValue] = useState(0)


  const getData = async() => {
    const { data } = await axios("https://course-api.com/react-tabs-project")

    setExperience(data)
  }
  useEffect(() => {    

    getData()

  }, [])
  console.log(jobValue);

  

  if(experience.length < 1){
    return (
      <Loading />
    )
  }

  return (
    <div className="App">
      <div className="tabs-container">
        {
          experience.map((item, index) => {
            return(
              <button 
              onClick={() => setJobValue(index)} 
              key={item.id}
              className={jobValue === index ? "active" : ""}
              >{item.company}</button>
            )
          })
        }
      </div>

      <div>
        <Context job={experience[jobValue]} />  
      </div> 


    </div>
  );
}

export default App;
