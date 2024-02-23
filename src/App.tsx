import "./App.css";
import Accordian from "./components/Accordian";
import ColorGenerator from "./components/ColorGenerator";

function App() {
  return (
    <>
      <div className="scroll-smooth text-slate-500 dark:text-slate-300 bg-white dark:bg-slate-900">
        <Accordian />
        <ColorGenerator />
      </div>
    </>
  );
}

export default App;
