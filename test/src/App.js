import { Home } from "./pages/home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Demo } from "./components/demo/demo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
