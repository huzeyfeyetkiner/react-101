import "./App.css";
import questions from "./data";
import AccItem from "./components/AccItem";

function App() {
  return (
    <div className="App">
      {questions.map((item, i) => {
        return <AccItem key={i} item={item} />;
      })}
    </div>
  );
}

export default App;
