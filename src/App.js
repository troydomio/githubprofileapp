import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Results from './components/Results';

function App() {
  return (
    <div>
     {/* <Navbar/> */}
     <Searchbar/>
     <Results/>
    </div>
  );
}

export default App;
