import Img_i from "./../../../../assets/card-icons.png";
import Img_ii from "./../../../../assets/flag-icons.png";

function Main_iv(){
    return(
        <>
            <div className="relative mt-28">
                <div className="mb-16 xxxs:mx-2 md:mx-0">
                    <h3 className="text-center text-gray-500 font-bold text-2xl mb-4">Everyday needs</h3>
                    <h1 className="text-center text-black font-bold text-4xl">Managee your money better, spend it better</h1>
                    <p className="text-center text-xl mt-6">Your money belongs to you. Easy access to your funds 24/7 via one account.</p>
                </div>
                <div className="flex xxs:flex-col md:flex-row items-center justify-center md:space-x-6 md:space-y-0 xxxs:space-y-4">
                    <div className="md:w-4/12 bg-white p-8 rounded-2xl pl-9">
                        <div>
                            <h1 className="font-bold text-3xl w-9/12">Explore more than +70 payment methods all over the world.</h1>
                            <p className="py-4 text-lg w-8/12">Jeton seamlessly combines major payment providers around the world in one easy to use wallet</p>
                        </div>
                        <div className="flex justify-end">
                            <img src={Img_i} srcset={Img_i} />
                        </div>
                    </div>
                    <div className="md:w-4/12 bg-white p-8 pt-10 pl-12 rounded-2xl">
                        <div>
                            <h1 className="font-bold text-3xl">All Currencies, one wallet</h1>
                            <p className="py-4 text-lg w-9/12">Jeton has built partnerships that allow it to process transactions globally. That means Jeton allows transactions from Brazil to Japan, India to Poland, enabling users to deposit or withdraw from their wallet globally.</p>
                        </div>
                        <div className="flex justify-end">
                            <img src={Img_ii} srcset={Img_ii} />
                        </div>
                    </div>
                </div>
                <div className="py-8 md:w-8/12 mt-8 rounded-2xl mx-auto" id="iimg">
                    <div className="flex justify-between items-center">
                        <div className="w-full xxxs:hidden md:block"></div>
                        <div className="flex flex-col">
                            <div>
                                <h1 className="font-bold md:text-white xxxs:text-center md:text-left text-4xl xxxs:text-black">Simple, fast and safe</h1>
                                <p className="w-11/12 py-8 md:text-white text-xl xxxs:text-center md:text-left">Pay with a few clicks. You can easily use Jeton Wallet as an option to deposit and withdraw on different partners' websites.</p>
                            </div>
                            <div className="mt-36 mb-2 xxxs:mx-auto md:mx-0">
                                <button className="border-2 md:border-white xxxs:border-black p-3 px-12 rounded-xl">
                                    <span className="md:text-white xxxs:font-bold">Try Jeton Wallet</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_iv;