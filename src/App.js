import './css/App.css';
import SideBar from './Components/SideBar';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import OrderInformation from './Components/OrderInformation';
import { orderInformationMockData } from './mockData/mockData';
import OrderActivities from './Components/OrderActivities';

function App() {
  return (
    <div className='dashboard_container'>
      <SideBar />
      <Navbar />
      <Header />
      <div className='orderActivities_info_wrapper'>
        <OrderInformation
          OrderInformation={orderInformationMockData.orderInformation}
          profits={orderInformationMockData.NetProfit}
        />
        <OrderActivities />
      </div>
    </div>
  );
}

export default App;
