import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Landing from './pages/landing';
import Calculator from "./pages/calculator";
import Visualizer from "./pages/visualizer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="calc" element={<Calculator />} />
        <Route path="chart" element={<Visualizer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
