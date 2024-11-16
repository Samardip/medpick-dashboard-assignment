import { Circle } from '@mui/icons-material';
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
    <div className='flex overflow-hidden'>
      <div className='w-1/6 px-8 py-[30px] h-[100vh]'>
        <Sidebar />
      </div>
      <div className='w-5/6 bg-gray-100 h-[100vh] overflow-y-scroll overflow-x-hidden'>
        <Navbar />
        <div className='flex'>
          <div className='flex flex-col  h-[100%] w-[65%] '>
            <OrderSummary />
            <div className="py-4 px-6 m-[35px] mt-[25px] !bg-white rounded-[8px] shadow-sm h-[100%]">
              <div className='font-bold text-md mb-2 px-8 pt-2'>
                Analytics
              </div>
              <BarChartGraph />
              <div className='flex justify-center items-center gap-4'>
                <div className='flex justify-center items-center gap-2'>
                  <div className='flex justify-center items-center'><Circle className='!w-[15px] !h-[15px] text-custom-blue'/></div>
                  <div className='font-semibold'>Total order recieved</div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                  <div className='flex justify-center items-center'><Circle className='!w-[15px] !h-[15px] text-custom-orange'/></div>
                  <div className='font-semibold'>Order approval pending</div>
                </div>
              </div>
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
