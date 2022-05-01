import './App.css';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';


function App() {
  return (
    <div className="App">
      <Searchbar />
      <Topbar />
      <Sidebar />

    </div>

  );
}


export default App;