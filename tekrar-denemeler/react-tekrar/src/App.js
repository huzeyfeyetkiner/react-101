import './App.css';

import Header from "./components/header.jsx"
import InputEx from './components/input-ex.jsx';
import Count from './components/state.jsx';
import Content from './components/array-object-state';
import CopyInputArea from './components/input-state';
const address = {
  title: "Istanbul", 
  zip:34050
}

function App() {
  

  return (   

    <>
       <Header name="Huzeyfe" surName="Yetkiner" age={23} address={address} />

      <InputEx />    

      <Count />

      <Content />

      <hr />
      <CopyInputArea />
    </>
   
  );
}

export default App;
