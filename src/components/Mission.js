import bg from '../images/Card.svg';
import mobilebg from '../images/Card2.svg';
import playtransparent from '../images/play-store-transparent.svg';
import appletransparent from '../images/play-store-transparent.svg';  


const Mission = () => {
    const imageUrl= window.innerWidth <= 768 ? mobilebg : bg;
    return (  
        <div className="px-6 md:px-20 py-12 text-white">
      
            <div className="bg-black/80 rounded-xl px-4 py-10 flex flex-col items-center text-center space-y-5 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${imageUrl})`}}>
            <h3 className="font-bold text-2xl pt-4 ">Our mission</h3>
            <p className="mt-4">
                To decentralize QR payment infrastructure for all businesses across Africa making  financial services seamless and reliable
            </p>
            <div className="sm:flex sm:space-x-5 sm:space-y-0  justify-center sm:items-center mt-8 pb-8">
             <img className="h-full w-40"  src={playtransparent} alt="" />
             <img className="mt-6 w-40" src={appletransparent}alt="" />
            </div>
            </div>
        </div>
    );
}
 
export default Mission;