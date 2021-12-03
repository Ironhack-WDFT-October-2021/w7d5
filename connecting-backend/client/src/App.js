import './App.css';
import CountryList from './CountryList';
import CountryDetails from './CountryDetails';
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route path='/' element={<CountryList />} />
          <Route path='/:cca3' element={<CountryDetails />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
