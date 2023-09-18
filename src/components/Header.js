import  { useState } from 'react';
import Hero from './Hero';
import logo1 from '../images/logo1.svg';

const Header = () => {
  const [sidenav, setsideNav] = useState(false);

  const handleSidenav =()=> {
    setsideNav(true);
  };


  return (
    <div className="Header h-screen sm:h-[50vh] md:h-screen w-full bg-[#424242]">
    <div className="flex items-center justify-between px-6 md:px-20 py-6">
      <a href="/" className="flex items-center">
        <img src={logo1} alt="logo" />
        <h1 className="text-2xl md:text-3xl font-bold text-white ml-2">Payleaf</h1>
      </a>
      <div className="relative">
        <div className="md:hidden" onClick={handleSidenav}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className=" w-8 h-8">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </div>
        { sidenav && (
        <div className=" absolute left-0 top-0 text-xl bg-black text-white">
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-8 h-8" >
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
          </div>

          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Mission</a></li>

            </ul>
          </nav>

        </div>
        )}


      </div>
      <div className="space-x-5 hidden md:flex">
        <button className="bg-[#FF7F00] text-white px-4 py-2 text-xl rounded-md">Join waiting list</button>
        <button className="bg-white text-[#141414] px-4 py-2 text-xl rounded-md">Become a merchant</button>
      </div>
    </div>
    <Hero/>
    </div>

  );
}
 
export default Header;