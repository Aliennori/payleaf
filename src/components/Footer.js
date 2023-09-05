import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (  
        <div className="bg-[#141414] px-6 md:px-20 py-5 text-white">
         <div className="md:flex md:justify-between items-center">
            <div className="text-left">
                <h1 className="text-2xl sm:text-4xl">Be the first to know when we launch</h1>
                <p className="text-xl">We're still building. Join our waiting list now! </p>

           </div>
           <div className="">
           <form>
  <div className="mt-2">
    <input
      type="email"
      className="mr-2 py-3 px-4 border-2 w-2/4"
      placeholder="Enter your email"
    />
    <input
      type="submit"
      value="Subscribe"
      className="px-4 bg-tertiary py-3 tracking-wider font-bold text-white"
    />
  </div>
</form>
           </div>
         </div>
         <div className="md:flex md:justify-between items-center py-5">
           <div className="">
            <p>2023. All rights reserved</p>            
           </div>
           <div className="">
            <ul>
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