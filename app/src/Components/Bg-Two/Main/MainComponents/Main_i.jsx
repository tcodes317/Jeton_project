function Main_i(){
    return(
        <>
            <div className="relative">
                <h1 className="font-bold md:py-8 xxxs:py-4 md:pt-20 xxxs:pt-10 md:text-4xl xxxs:text-2xl text-center">What are people saying?</h1>
                <h6 className="text-center xxxs:text-sm mb-12 md:text-lg">Based on our customer reviews</h6>
                <div className="flex items-center flex-col space-y-4" id="card-container">
                    <div className="flex xxxs:flex-col md:flex-row items-center justify-center space-x-4 xxxs:space-x-0" id="card-cont-i">                        
                        <div className="bg-white md:w-6/12 xxxs:w-11/12 p-4 px-6 rounded-lg shadow-lg" id="card_i">
                            <i className="fa fa-quote-left text-gray-200 text-3xl pb-3"></i>
                            <h1 className="font-bold text-2xl mb-6">Recommendable E-wallet</h1>
                            <div className="font-bold text-sm text-black-400">Recommendable E-wallet. Functionality and layout of the site above average. <br /> Quick account verification and withdrawals. 24/7 support available. All in all best wallet I came across.</div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-10 h-10 flex items-center justify-center font-bold bg-blue-500 text-white rounded-full">VK</div>
                                <h4 className="text-sm">Vamsi Kalluri</h4>
                                <i className="fa fa-location"></i>
                                <div className="font-bold text-sm">GB</div>
                            </div>
                        </div>

                        <div className="bg-white md:w-4/12 xxxs:mt-4 xxxs:w-11/12 p-4 px-6 rounded-lg shadow-lg" id="card_i">
                            <i className="fa fa-quote-left text-gray-200 text-3xl pb-3"></i>
                            <h1 className="font-bold text-xl mb-5">Awesome application very user friendly</h1>
                            <div className="font-bold text-sm text-black-400">Would highly recommend Jeton wallet to my friends</div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-10 h-10 flex items-center justify-center font-bold bg-orange-300 text-white rounded-full">DD</div>
                                <h4 className="text-sm truncate">Danzil Dominic Afonzo</h4>
                                <i className="fa fa-location"></i>
                                <div className="font-bold text-sm">GB</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex xxxs:flex-col md:flex-row items-center justify-center space-x-4 xxxs:space-x-0" id="card-cont-i">                        
                        <div className="bg-white md:w-5/12 xxxs:w-11/12 p-4 px-6 rounded-lg shadow-lg" id="card_i">
                            <i className="fa fa-quote-left text-gray-200 text-3xl pb-3"></i>
                            <h1 className="font-bold text-xl mb-5">The best e-wallet for Brazilian customers</h1>
                            <div className="font-bold text-sm text-black-400">I've been a Jeton wallet user for a few years! The support was <br /> always, greate and I'm always able to make my payments to the websites I want with no hassle.</div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-10 h-10 flex items-center justify-center font-bold bg-orange-300 text-white rounded-full">MR</div>
                                <h4 className="text-sm truncate">Maicon Roger</h4>
                                <i className="fa fa-location"></i>
                                <div className="font-bold text-sm">GB</div>
                            </div>
                        </div>
                        <div className="bg-white md:w-5/12 xxxs:mt-4 xxxs:w-11/12 p-4 px-6 rounded-lg shadow-lg" id="card_i">
                            <i className="fa fa-quote-left text-gray-200 text-3xl pb-3"></i>
                            <h1 className="font-bold text-2xl mb-6">Payments made easy</h1>
                            <div className="font-bold text-sm text-black-400">Payments made easy! My Merchant suggested this E-wallet pretty <br /> quick and easy.</div>
                            <div className="flex items-center space-x-4 mt-4">
                                <div className="w-10 h-10 flex items-center justify-center font-bold bg-pink-500 text-white rounded-full">MR</div>
                                <h4 className="text-sm">Musku Raghureddy</h4>
                                <i className="fa fa-location"></i>
                                <div className="font-bold text-sm">GB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_i;