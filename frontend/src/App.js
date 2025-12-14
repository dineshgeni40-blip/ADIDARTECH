import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AIAgents from "./components/AIAgents";
import AICoPilots from "./components/AICoPilots";
import AIAutomation from "./components/AIAutomation";
import AIProduct from "./components/AIProduct";
import MachineLearning from "./components/MachineLearning";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/ai-copilots" element={<AICoPilots />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
          <Route path="/ai-product" element={<AIProduct />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;