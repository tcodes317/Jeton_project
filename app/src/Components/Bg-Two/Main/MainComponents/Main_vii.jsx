import Img_i from "./../../../../assets/magnet.png";
import Img_ii from "./../../../../assets/coin-left-3.png";
import Img_iii from "./../../../../assets/coin-gold.png";
import Img_iv from "./../../../../assets/coin-silver-2.png";
import Img_v from "./../../../../assets/coin-silver.png";

function Main_vii(){
    return(
        <>
            <div className="relative mt-24 md:w-11/12 mx-auto">
                <div>
                    <h1 className="text-2xl font-bold text-center text-gray-400 md:text-4xl">Get 1% Cashback
                        {/* <img src={} srcset={} /> */}
                    </h1>
                    <h1 className="text-center mt-4 font-bold text-3xl md:text-4xl">Advantages of Jeton Wallet Awaits you</h1>
                </div>
                <div className="relative rounded-xl p-10 mt-6 pt-20" id="iio">
                    <h1 className="text-white font-bold text-4xl md:w-6/12 mb-8">Every Payment Pays You Back with Jeton!</h1>
                    <h1 className="text-xl font-bold text-gray-400 md:w-5/12 mb-10"><span className="text-orange-400 mr-2" id="ure">Get 1% Cashback</span>reward everytime you make a payment with Jeton. Don't miss out on this offer start pampering your wallet now!</h1>
                    <h4 className="mb-12 text-white font-bold">Terms & Conditions</h4>
                    <img src={Img_i} srcset={Img_i} className="absolute z-50 md:block xxxs:hidden md:w-3/12 xxxs:w-6/12 right-0 top-0" />
                    <div className="absolute top-20 right-14 md:block xxxs:hidden">
                        <img src={Img_ii} srcset={Img_ii} className="md:w-9/12 xxxs:w-6/12 ml-8" />
                        <img src={Img_iii} srcset={Img_iii} className="-ml-17 w-6/12 -mt-20" />
                        <img src={Img_v} srcset={Img_v} className="w-7/12 absolute right-0 top-48" />
                        <img src={Img_iv} srcset={Img_iv} className="w-8/12 -mt-4 -ml-12" />
                    </div>
               </div>
            </div>  
        </>
    )
}

export default Main_vii;