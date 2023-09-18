import step1 from '../images/step1.svg';
import step2 from '../images/step2.svg';
import step3 from '../images/step3.svg';
import step4 from '../images/step4.svg';
import playblackbg from '../images/play-store-blackbg.svg';
import appleblackbg from '../images/apple-store-blackbg.svg';
import paymenthero from '../images/payment-hero.svg';


const Action = () => {
    return ( 
        <div className="call-to-action bg-[#F9F7F4] px-6 md:px-20 py-12">
            <div className="bg-white rounded-md px-6 py-10 md:flex md:justify-between md:items-center ">
                <div className="md:w-1/2 text-left text-lg">
                    <h3 className="font-bold text-3xl  mb-2">Make payments</h3>
                    <p className="text-xl mb-10">
                        Our app is designed to make your life easier and more convenient, whether you're shopping online or in-store. Sign up now and experience the future of transactions.
                    </p>
                    <div className="flex space-x-2 " >
                    <img className="" src={step1} alt="" />
                    <p className="" >Download the app onPlaystore/IOS</p>
                    </div>
                    <div className="flex space-x-2">
                    <img className="" src={step2} alt="" />
                    <p className="" >Sign up and add debit card</p>
                    </div>
                    <div className="flex space-x-2" >
                    <img className="" src={step3} alt="" />
                    <p className="" >Fund wallet zero charges</p>
                    </div>
                    <div className="flex space-x-2" >
                    <img className="" src={step4} alt="" />
                    <p className="" >Scan & make payments</p>
                    </div>                   
                    <div className="sm:flex sm:space-x-5 sm:space-y-0 sm:items-center mt-6">
                      <img className="h-full w-40"  src={playblackbg} alt="" />
                      <img className="mt-6 w-40" src={appleblackbg} alt="" />
                   </div>                 
                </div>
                <div className="md:w-1/2 hidden md:block">
                <img className=""  src={paymenthero} alt="" />           
                </div>

            </div>


        </div>

     );
}
 
export default Action;