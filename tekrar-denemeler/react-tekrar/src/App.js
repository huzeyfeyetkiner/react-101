import './App.css';

import Header from "./components/header.jsx"
import InputEx from './components/input-ex.jsx';
import Count from './components/state.jsx';
import Content from './components/array-object-state';
import CopyInputArea from './components/input-state';
import Fetch from './components/fetch'

// module css örneği için
import A from './components/module_css/A';
import B from './components/module_css/B';


const address = {
  title: "Istanbul", 
  zip:34050
}

function App() {
  

  return (   

    <div className='App'>
       {/* <Header name="Huzeyfe" surName="Yetkiner" age={23} address={address} />

      <InputEx />    

      <Count />

      <Content />

      <hr />
      <CopyInputArea />

      <A />
      <B /> */}

      <Fetch />
    </div>
   
  );
}

export default App;
