import Img_i from "./../../../../assets/card-icons.png";
import Img_ii from "./../../../../assets/flag-icons.png";

function Main_iv(){
    return(
        <>
            <div className="relative mt-28">
                <div className="mb-16 xxxs:mx-2 md:mx-0">
                    <h3 className="text-center text-gray-500 font-bold text-2xl mb-4 md:text-4xl md:pb-4 xlg:text-4xl xxlg:text-5xl">Everyday needs</h3>
                    <h1 className="text-center text-black font-bold text-4xl xxlg:text-5xl">Managee your money better, spend it better</h1>
                    <p className="text-center text-xl mt-6 xxlg:text-2xl">Your money belongs to you. Easy access to your funds 24/7 via one account.</p>
                </div>
                <div className="flex xxs:flex-col md:px-6 md:flex-col items-center justify-center xxxs:space-y-4">
                    <div className=" bg-white p-8 rounded-2xl pl-9 md:w-full">
                        <div>
                            <h1 className="font-bold text-3xl md:text-4xl w-9/12 xxlg:text-5xl">Explore more than +70 payment methods all over the world.</h1>
                            <p className="py-4 text-lg w-8/12 md:text-2xl xlg:mt-4 xxlg:text-3xl">Jeton seamlessly combines major payment providers around the world in one easy to use wallet</p>
                        </div>
                        <div className="flex justify-end">
                            <img src={Img_i} srcset={Img_i} />
                        </div>
                    </div>
                    <div className="md:w-full bg-white p-8 pt-10 pl-12 rounded-2xl">
                        <div>
                            <h1 className="font-bold text-3xl md:text-4xl xxlg:text-5xl">All Currencies, one wallet</h1>
                            <p className="py-4 text-lg w-9/12 md:text-2xl md:mt-6 xxlg:text-3xl">Jeton has built partnerships that allow it to process transactions globally. That means Jeton allows transactions from Brazil to Japan, India to Poland, enabling users to deposit or withdraw from their wallet globally.</p>
                        </div>
                        <div className="flex justify-end">
                            <img src={Img_ii} srcset={Img_ii} />
                        </div>
                    </div>
                </div>
                <div className="py-8 md:w-11/12 mt-8 rounded-2xl mx-auto" id="iimg">
                    <div className="flex justify-between items-center">
                        <div className="w-full border-2 md:hidden xxxs:hidden"></div>
                        <div className="flex flex-col">
                            <div>
                                <h1 className="font-bold xxxs:text-center md:text-center md:text-5xl md:text-black text-4xl xxxs:text-black">Simple, fast and safe</h1>
                                <p className="w-11/12 py-8 md:text-black text-xl md:text-3xl md:text-center xxxs:text-center md:mt-8 xxlg:mx-auto">Pay with a few clicks. You can easily use Jeton Wallet as an option to deposit and withdraw on different partners' websites.</p>
                            </div>
                            <div className="mt-36 mb-2 xxxs:mx-auto md:mx-0 md:flex md:items-center md:justify-center">
                                <button className="border-2 md:border-4 md:w-5/12 md:p-6 md:border-black xxxs:border-black xlg:hover:bg-white xlg:hover:!text-black hover:xlg:border-white p-3 px-12 rounded-xl md:bg-black md:text-white">
                                    <span className="xxxs:font-bold md:text-2xl md:text-black xlg:text-white hover:xlg:text-black">Try Jeton Wallet</span>
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