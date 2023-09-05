const Action = () => {
    return ( 
        <div className="call-to-action bg-[#F9F7F4] px-6 md:px-20 py-12">
            <div className="bg-white rounded-md px-4 pt-6 md:flex md:justify-between md:items-center">
                <div className="md:w-1/2">
                    <h3 className="font-bold text-2xl">Make payments</h3>
                    <p>
                        Our app is designed to make your life easier and more convenient, whether you're shopping online or in-store. Sign up now and experience the future of transactions.
                    </p>
                    <ul>
                        <li>Download the app on Playstore/IOS</li>
                        <li>Sign up and add debit card</li>
                        <li>Fund wallet zero charges</li>
                        <li>Scan & make payments</li>
                    </ul>
                    <div className="sm:flex sm:space-x-5 sm:space-y-0 sm:items-center mt-10">
                      <img className="h-full w-40"  src="./images/play-store-blackbg.svg" alt="" />
                      <img className="mt-6 w-40" src="./images/apple-store-blackbg.svg" alt="" />
                   </div>                 
                </div>
                <div className="">
                <img className="" src="./images/scan-to-pay.svg" alt="" />           
                </div>

            </div>


        </div>

     );
}
 
export default Action;