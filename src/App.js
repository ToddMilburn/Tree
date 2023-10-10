import logo from './logo.svg';
import './App.css';

import { Routes, Route} from "react-router-dom";

import Navbar from './Navbar';
import Main from "./routes/Main";
import NotMain from "./routes/NotMain";

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/notMain" element={<NotMain />} />
        </Routes>
      </>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
