import Card from "./../../../../assets/jetoncard-card.png";
import Card_ii from "./../../../../assets/jetoncard-pay.png";
import Card_iii from "./../../../../assets/pos.png";
import Card_iv from "./../../../../assets/shield-home.png";

function Main_iii(){
    return(
        <>
            <div className="relative mt-32 pb-20">
                <div className="space-y-3">
                    <h3 className="text-center text-2xl font-bold text-gray-500 xlg:text-3xl">Card meets technology</h3>
                    <h1 className="text-center text-3xl font-bold xlg:text-4xl">Ready to use right away</h1>
                    <h4 className="text-center md:text-lg xxxs:text-sm xlg:text-2xl">Send effortlessly with your Jeton Card with no hidden fees</h4>
                </div>
                <div className="mt-14 border-2 border-black shadow-md rounded-2xl py-4 bg-white w-8/12 mx-auto xxxs:flex-col md:flex-col flex items-center justify-center">
                    <div>
                        <img src={Card} className="w-12/12 mx-auto" srcset={Card} />
                    </div>
                    <div className="mx-auto flex justify-center md:text-center w-12/12 pl-4 flex-col text-left md:mr-5">
                        <h1 className="md:text-3xl font-bold py-4 xxxs:text-2xl">Get Your Jeton Card</h1>
                        <p className="w-9/12 text-2xl xxxs:text-center md:w-full md:text-center md:mx-auto xxxs:mx-auto">Use your Jeton Card for all purchases with ease. <br /> Whether physical or virtual, your Visa Debit card works seamlessly at all merchants and terminals accepting Visa Debit. Enjoy quick and secre payments using your everyday devices like phone or smart watch.</p>
                        <div className="mt-8 md:py-4 md:pb-8">
                            <button className="md:px-20 xlg:bg-black xlg:text-white hover:bg-white hover:text-black hover xlg:p-6 xxxs:px-12 xxxs:ml-2 md:ml-0 md:w-full rounded-xl py-4 border-2 border-black">
                                <span className="font-bold text-xl xlg:text-2xl">Learn more</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-2 w-8/12 mx-auto">
                <div className="flex xxxs:flex-col md:flex-col md:space-y-8 xxxs:items-center md:items-stretch">
                    <div className="md:w-full">
                        <img className="" src={Card_ii} srcset={Card_ii} />
                    </div>
                    <div className="space-y-1 bg-blue-700 xxxs:mt-4 xxxs:w-full md:mt-0 xlg:text-2xl p-6 rounded-2xl text-white">
                        <h4 className="text-3xl font-bold flex items-center text-gray-400 mt-6 xlg:text-4xl"><div className="text-orange-500">Jeton</div>Card</h4>
                        <h1 className="font-bold text-4xl w-10/12 pb-6 pt-4 xlg:text-4xl">Faster payments, made simpler every day.</h1>
                        <div className="font-bold w-10/12 text-xl xlg:font-normal xlg:text-2xl">Adding your card to Apple Pay is simple. Securely add your Jeton card to Apple pay with just a few taps within the Jeton app itself.</div>
                        <div className="mt-4">
                            <div className="flex xxxs:flex-col md:flex-row md:items-center mt-8 xxxs:space-y-4 md:space-y-0">
                                <div className="flex md:flex-row xxxs:flex-col items-center md:space-x-10 xxxs:space-y-4 md:space-y-0 md:border-r-2 pr-4">
                                    <div className="space-x-2 xxxs:border-2 md:border-none xxxs:p-2 xxxs:px-12 md:p-0 md:px-0">
                                        <i className="fa-brands fa-apple text-2xl"></i>
                                        <span className="font-bold">Pay</span>
                                    </div>
                                    <div className="space-x-2 xxxs:border-2 md:border-none xxxs:p-2 xxxs:px-12 md:p-0 md:px-0 flex items-center">
                                        <i className="fa-brands fa-google text-2xl"></i>
                                        <span className="font-bold">Pay</span>
                                    </div>
                                </div>
                                <div className="pl-4">
                                    <button className="bg-white p-4 rounded-lg xlg:p-4 py-2 text-blue-600" id="but">
                                        <span className="font-bold">Learn more <i className="fa fa-arrow-right text-sm ml-2"></i></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-8">
                <div className="flex xxxs:flex-col md:flex-col items-center justify-center xxxs:space-y-4 md:space-y-6 xxxs:mx-4 xlg:mx-0">
                    <div className="bg-white p-8 rounded-xl flex md:w-8/12 items-center">
                        <div className="">
                            <h1 className="font-bold text-3xl text-left xlg:text-4xl">Easy to Pay</h1>
                            <p className="pt-5 text-xl w-7/12 md:w-9/12 md:text-xl xlg:text-2xl">The easiest way to pay - Jeton card contactless pay</p>
                        </div>
                        <div>
                            <img src={Card_iii} srcset={Card_iii} />
                        </div>
                    </div>
                    <div className="bg-gray-500 p-8 py-12 md:w-8/12 rounded-xl flex items-center">
                        <div className="">
                            <h1 className="text-white font-bold text-3xl xlg:text-4xl">Stay Secure</h1>
                            <p className="text-white pt-4 w-7/12 md:w-9/12 md:text-xl xlg:text-2xl">From card freezing, to spending limits, turn them on or off with a single move.</p>
                        </div>
                        <div>
                            <img src={Card_iv} srcset={Card_iv} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_iii;