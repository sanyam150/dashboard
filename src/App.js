import './css/App.css';
import SideBar from './Components/SideBar';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='dashboard_container'>
      <SideBar />
      <Navbar />
    </div>
  );
}

export default App;
