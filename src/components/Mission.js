const Mission = () => {
    return (  
        <div className="px-6 md:px-20 py-12 text-white">
            <div className="bg-">overlay
            

            </div>
            <div className="bg-black/80 rounded-xl px-4 flex flex-col items-center text-center space-y-5">
            <h3 className="font-bold text-2xl pt-4">Our mission</h3>
            <p className="mt-4">
                To decentralize QR payment infrastructure for all businesses across Africa making  financial services seamless and reliable
            </p>
            <div className="sm:flex sm:space-x-5 sm:space-y-0  justify-center sm:items-center mt-8 pb-8">
             <img className="h-full w-40"  src="./images/play-store-transparent.svg" alt="" />
             <img className="mt-6 w-40" src="./images/apple-store-transparent.svg" alt="" />
            </div>
            </div>
        </div>
    );
}
 
export default Mission;