import './App.css';

import Logo from './assets/logo.svg';
import PalmTree from './assets/palmtree.svg';

import Navigation from './Navigation';
import Dashboard from './Dashboard';
import TopBar from './TopBar';

function App() {
  return (
    <div className='bg-slate-200 h-screen w-full flex items-center justify-center'>
      <div className='bg-white w-[85%] h-[85%] rounded-3xl border border-slate-300 flex flex-row-reverse'>
        <div className='w-[80%] flex flex-col rounded-tr-3xl rounded-br-3xl items-center justify-start h-full'>
          <TopBar userId='user' city='city' />
          <Dashboard />
        </div>
        <div className='border-r border-slate-300 rounded-l-3xl w-[20%] flex items-start flex-col'>
          <div className='w-full flex justify-start items-center gap-4 pt-2 pl-5'>
            <img src={Logo} alt='logo' className='w-12 h-12' />
            <h1 className='text-2xl logo mt-3  text-[#19274f]'>Casa Brasilis</h1>
          </div>
          <div className='flex-1 w-full rounded-bl-3xl pl-4 pr-6 pt-10 overflow-hidden'>
            <Navigation />
            <img src={PalmTree} alt='palm tree' className='h-[150%] opacity-20' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
