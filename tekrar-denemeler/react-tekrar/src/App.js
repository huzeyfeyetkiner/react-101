import './App.css';
import Header from "./components/header.jsx"
import InputEx from './components/input-ex.jsx';

const address = {
  title: "Istanbul", 
  zip:34050
}

function App() {
  

  return (   

    <>
       <Header name="Huzeyfe" surName="Yetkiner" age={23} address={address} />

      <InputEx />    
    </>
   
  );
}

export default App;
