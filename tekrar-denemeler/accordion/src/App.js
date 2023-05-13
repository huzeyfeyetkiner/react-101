import "./App.css";
import questions from "./data";
import AccItem from "./components/AccItem";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>F.A.Q</h2>
        {questions.map((item, i) => {
          return <AccItem key={i} item={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
