const Payment = () => {
    return ( 
        <div className="bg-[#141414] px-6 md:px-20 py-12 md:flex md:justify-between md:items-center w-full text-white text-left">
          <div className="md:w-1/2">
            <h3 className="font-bold text-3xl  mb-4">Receive payments</h3>
            <p className="text-base md:text-xl mb-4">Our cutting-edge scan to pay wallet app is made to provide merchants with a quick, safe, and practical payment experience. Businesses can use the app in their everyday sales by signing up with Payleaf, enabling customers to buy things with simply a scan.</p>

            <p className="text-base md:text-xl">Low fees, no transaction costs, and excellent security are all provided by payleaf. By giving customers a simple payment alternative, it hopes to aid in the expansion and prosperity of enterprises</p>
            <button className="bg-white text-[#141414] rounded-md font-medium text-xl px-4 py-2 mt-8 ">Become a merchant</button>
          </div>
          <div className="md:w-1/2 hidden md:block">
          <img className="w-full" src="./images/scan-to-pay.svg" alt="" />           
          </div>
        </div>
     );
}
 
export default Payment;