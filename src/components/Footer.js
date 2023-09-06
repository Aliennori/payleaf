import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (  
        <div className="bg-[#141414] px-6 md:px-20 py-5 text-white">
         <div className="md:flex md:justify-between items-center border-b border-[#424242]">
            <div className="text-left">
                <h1 className="text-2xl mb-4 font-bold">Be the first to know when we launch</h1>
                <p className="mb-2">We're still building. Join our waiting list now! </p>

           </div>
           <div className="">
           <form>
  <div className="mt-6 md:mt-0 md:flex space-x-2">
    <input
      type="email"
      className=" py-3 px-4 border-2 w-full rounded-md md:w-72 md:ml-2"
      placeholder="Enter your email"
    />
    <input
      type="submit"
      value="Submit"
      className="px-6 bg-tertiary py-3 tracking-wider font-bold text-white w-full md:w-fit border border-[#A3A3A3]  mt-6 md:mt-0"
    />
  </div>
</form>
           </div>
         </div>
         <div className="md:flex md:justify-between items-center py-5">
           <div className="text-left">
            <p>2023. All rights reserved</p>            
           </div>
           <div className="">
            <ul className="flex space-x-4">
                <li><a href="/"> <FaInstagram size={24} /></a></li>
                <li><a href="/"><FaFacebook size={24} /></a></li>
                <li><a href="/"><FaTwitter size={24} /></a></li>
            </ul>
            
           </div>

         </div>

        </div>
        
    );
}
 
export default Footer;