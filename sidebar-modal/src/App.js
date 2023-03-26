import "./App.css";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import { SidebarProvider } from "./context/context";

function App() {
  return (
    <SidebarProvider>
      <Home />
      <Sidebar />
      <Modal />
    </SidebarProvider>
  );
}

export default App;
