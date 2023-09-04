const About = () => {
    return ( 
        <div className="about px-6 md:px-20 py-10 text-left ">
            <div className="md:w-3/5 space-y-5 ">
                <h1 className="font-bold text-4xl mb-6">What is Payleaf</h1>
                <p className="text-xl">Payleaf is a QR code base payment platform that allows merchants like you to accept payment from customers without Cash.</p>
            </div>
            <div className="bg-[#F9F7F4] md:flex md:justify-between md:items-center mt-10 p-4 md:p-10 rounded-lg">
                <div class="md:w-1/2">
                    <h2 className="mb-10 text-3xl font-bold">Do you know you can make payment with just your camera?</h2>
                    <p className="text-xl">With our cutting-edge technology, you can make purchases with just a simple scan, eliminating the need for carrying cash or fumbling with credit cards. Our app is user-friendly and customizable, making it easy to manage your finances and keep track of your transactions.</p>
                    <p className="mt-6 text-xl">By joining PayLeaf, you can take advantage of our low fees and zero transaction costs, making it easier than ever to manage your finances. Plus, with our top-notch security measures, you can trust that your transactions and information are always protected.</p>
                </div>
                <div class="md:w-1/2">
                    <img src="./images/about-hero.svg" alt="" />

                </div>

            </div>

        </div>
     );
}
 
export default About;


