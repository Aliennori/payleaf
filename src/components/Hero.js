import playwhitebg from '../images/play-store-whitebg.svg';
import applewhitebg from '../images/applestorewhitebg.svg';
import heroimg from '../images/hero.svg';

const Hero = () => {
    return ( 
        <div className="content md:flex justify-between items-center px-6 md:px-20 text-white">
            <div className="md:w-1/2">
                <h1 className="text-3xl md:text-5xl font-bold mb-10 text-left tracking-[-2%] md:tracking-[-2.5%]" >Welcome to the future of payments with Payleaf</h1>
                <p className="text-left text-xl text-[#D6D6D6]">Our innovative scan to pay wallet app is designed to make transactions faster, more secure, and more convenient than ever before. By registering with us, you can experience a whole new level of hassle-free payments.</p>
                <div className="sm:flex sm:space-x-5 sm:space-y-0 sm:items-center mt-10">
                    <img className="h-full w-40"  src={playwhitebg} alt="" />
                    <img className="mt-6 w-40" src={applewhitebg} alt="" />
                </div>

            </div>
            <div className="hidden md:block md:w-1/2">
                <img src={heroimg} alt="" />
            </div>
        </div>

     );
}
 
export default Hero;