function Main_i(){
    return(
        <>
            <div className="relative">
                <h1 className="font-bold py-8 pt-20 text-4xl text-center">What are people saying?</h1>
                <h6 className="text-center text-sm mb-12">Based on our customer reviews</h6>
                <div className="flex items-center flex-col" id="card-container">
                    <div className="flex items-center justify-center space-x-4" id="card-cont-i">
                        <div className="bg-white w-5/12 p-4 px-10 rounded-lg shadow-lg" id="card_i">
                            <i className="fa fa-dot"></i>
                            <h1 className="font-bold text-2xl mb-6">Recommendable E-wallet</h1>
                            <div className="font-bold text-sm text-black-400">Recommendable E-wallet. Functionality and layout of the site above average. <br /> Quick account verification and withdrawals. 24/7 support available. All in all best wallet I came across.</div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-10 h-10 flex items-center justify-center font-bold bg-blue-500 text-white rounded-full">VK</div>
                                <h4 className="text-sm">Vamsi Kalluri</h4>
                                <i className="fa fa-location"></i>
                                <div className="font-bold text-sm">GB</div>
                            </div>
                        </div>

                        <div className="bg-white w-4/12 p-4 px-10 rounded-lg shadow-lg" id="card_i">
                            <i className="fa fa-dot"></i>
                            <h1 className="font-bold text-2xl mb-6">Awesome application very user friendly</h1>
                            <div className="font-bold text-sm text-black-400">Would highly recommend Jeton wallet to my friends.</div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-10 h-10 flex items-center justify-center font-bold bg-blue-500 text-white rounded-full">DD</div>
                                <h4 className="text-sm">Vamsi Kalluri</h4>
                                <i className="fa fa-location"></i>
                                <div className="font-bold text-sm">GB</div>
                            </div>
                        </div>
                    </div>
                    <div className="" id="card-cont-ii">
                        <div className="" id="card_i"></div>
                        <div className="" id="card_ii"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_i;