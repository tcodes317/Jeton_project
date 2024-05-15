import Img_i from "./../../../../assets/card-icons.png";
import Img_ii from "./../../../../assets/flag-icons.png";

function Main_iv(){
    return(
        <>
            <div className="relative mt-28">
                <div className="mb-16">
                    <h3 className="text-center text-gray-500 font-bold text-2xl mb-4">Everyday needs</h3>
                    <h1 className="text-center text-black font-bold text-4xl">Managee your money better, spend it better</h1>
                    <p className="text-center text-xl mt-6">Your money belongs to you. Easy access to your funds 24/7 via one account.</p>
                </div>
                <div className="flex items-center justify-center space-x-6">
                    <div className="w-4/12 bg-white p-8 rounded-2xl pl-9">
                        <div>
                            <h1 className="font-bold text-3xl w-9/12">Explore more than +70 payment methods all over the world.</h1>
                            <p className="py-4 text-lg w-8/12">Jeton seamlessly combines major payment providers around the world in one easy to use wallet</p>
                        </div>
                        <div className="flex justify-end">
                            <img src={Img_i} srcset={Img_i} />
                        </div>
                    </div>
                    <div className="w-4/12 bg-white p-8 pt-10 pl-12 rounded-2xl">
                        <div>
                            <h1 className="font-bold text-3xl">All Currencies, one wallet</h1>
                            <p className="py-4 text-lg w-9/12">Jeton has built partnerships that allow it to process transactions globally. That means Jeton allows transactions from Brazil to Japan, India to Poland, enabling users to deposit or withdraw from their wallet globally.</p>
                        </div>
                        <div className="flex justify-end">
                            <img src={Img_ii} srcset={Img_ii} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_iv;