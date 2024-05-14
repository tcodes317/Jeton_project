import Card from "./../../../../assets/jetoncard-card.png";
import Card_ii from "./../../../../assets/jetoncard-pay.png";

function Main_iii(){
    return(
        <>
            <div className="relative mt-32 pb-20">
                <div className="space-y-3">
                    <h3 className="text-center text-2xl font-bold text-gray-500">Card meets technology</h3>
                    <h1 className="text-center text-3xl font-bold">Ready to use right away</h1>
                    <h4 className="text-center text-lg">Send effortlessly with your Jeton Card with no hidden fees</h4>
                </div>
                <div className="mt-14 border-2 border-black shadow-md rounded-2xl py-4 bg-white w-8/12 mx-auto flex items-center justify-center">
                    <div>
                        <img src={Card} className="w-12/12 mx-auto" srcset={Card} />
                    </div>
                    <div className="mx-auto flex justify-center w-12/12 pl-4 flex-col text-left">
                        <h1 className="text-3xl font-bold py-4">Get Your Jeton Card</h1>
                        <p className="w-9/12 text-2xl">Use your Jeton Card for all purchases with ease. <br /> Whether physical or virtual, your Visa Debit card works seamlessly at all merchants and terminals accepting Visa Debit. Enjoy quick and secre payments using your everyday devices like phone or smart watch.</p>
                        <div className="mt-8">
                            <button className="px-20 rounded-xl py-4 border-2 border-black">
                                <span className="font-bold text-xl">Learn more</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-2 border-2 w-8/12 mx-auto">
                <div className="flex space-x-8">
                    <div className="w-8/12">
                        <img className="" src={Card_ii} srcset={Card_ii} />
                    </div>
                    <div className="space-y-1 bg-blue-700 p-6 rounded-2xl text-white">
                        <h4 className="text-3xl font-bold flex items-center text-gray-400"><div className="text-orange-500">Jeton</div>Card</h4>
                        <h1 className="font-bold text-4xl w-10/12 pb-6">Faster payments, made simpler every day.</h1>
                        <div className="font-bold w-10/12 text-lg">Adding your card to Apple Pay is simple. Securely add your Jeton card to Apple pay with just a few taps within the Jeton app itself.</div>
                        <div className="mt-4">
                            <div className="flex items-center mt-8">
                                <div className="flex items-center space-x-10 border-r-2 pr-4">
                                    <div className="space-x-2">
                                        <i className="fa-brands fa-apple text-2xl"></i>
                                        <span className="font-bold">Pay</span>
                                    </div>
                                    <div className="space-x-2 flex items-center">
                                        <i className="fa-brands fa-google text-2xl"></i>
                                        <span className="font-bold">Pay</span>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <button className="bg-white p-4 rounded-lg py-2 text-blue-600">
                                        <span className="font-bold">Learn more <i className="fa fa-arrow-right text-sm ml-2"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_iii;