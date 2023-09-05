const Payment = () => {
    return ( 
        <div className="bg-[#141414] px-6 md:px-20 py-12 flex justify-between items-center w-full text-white">
          <div>
            <h3 className="font-bold text-2xl">Receive payments</h3>
            <p>Our cutting-edge scan to pay wallet app is made to provide merchants with a quick, safe, and practical payment experience. Businesses can use the app in their everyday sales by signing up with Payleaf, enabling customers to buy things with simply a scan.</p>

            <p>Low fees, no transaction costs, and excellent security are all provided by payleaf. By giving customers a simple payment alternative, it hopes to aid in the expansion and prosperity of enterprises</p>
            <button className="">Become a merchant</button>
          </div>
          <div>
          <img className=""  src="./images/payment-hero.svg" alt="" />
          </div>
        </div>
     );
}
 
export default Payment;