import './App.css';
import BarChartGraph from './component/barChart/barChart';
import { CardStat } from './component/cardStat/cardStat';
import { Navbar } from './component/navbar/navbar';
import { Products } from './component/products/products';
import { Sidebar } from './component/sidebar/sidebar';
import { OrderSummary } from './component/summary/orderSummary';
import { Transaction } from './component/transaction/transaction';

function App() {

  return (
    <div className='flex'>
      <div className='w-1/6 px-8 py-[30px] min-h-[100vh]'>
        <Sidebar />
      </div>
      <div className='w-5/6 bg-gray-100'>
        <Navbar />
        <div className='flex'>
          <div className='flex flex-col  h-[100%] w-[65%] '>
            <OrderSummary />
            <div className="py-4 px-6 m-[35px] mt-[25px] !bg-white rounded-[8px] shadow-sm h-[100%]">
              <BarChartGraph />
            </div>
            <div></div>
          </div>
          <div className='w-[35%]  p-3 '>
            <Transaction />
          </div>
        </div>
        <div className='flex'>
          <Products />
          <CardStat />
        </div>
      </div>
    </div>
  );
}

export default App;
