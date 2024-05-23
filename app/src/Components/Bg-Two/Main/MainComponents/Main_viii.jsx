import Img__i from "./../.../../../../../assets/Group10.png";
import Img__ii from "./../.../../../../../assets/Group11.png";
import Img__iii from "./../../../../assets/partner-base.png";

function Main_viii(){
    return(
        <>
            <div className="relative mt-24 pb-24 border-b-2 border-black">
                <div>
                    <h4 className="text-2xl font-bold text-gray-400 text-center md:text-4xl">More than 1M happy users</h4>
                    <h1 className="text-3xl font-bold text-center mt-6 mb-6 xlg:text-4xl md:text-4xl">Get started with Jeton Wallet in seconds</h1>
                    <h6 className="text-center text-xl text-gray-400">Download the Jeton app on IOS or Andriod and join the happy people who've changed the way they bank.</h6>
                </div>
                <div className="pt-10 pb-10">
                    <div className="flex xxxs:flex-col md:flex-row items-center md:space-x-4 xxxs:space-y-4 md:space-y-0 justify-center">
                        <img src={Img__i} srcset={Img__i} className="cursor-pointer" />
                        <img src={Img__ii} srcset={Img__ii} className="cursor-pointer" />
                    </div>
                </div>
                <div className="md:w-11/12 md:mx-auto">
                    <img src={Img__iii} srcset={Img__iii} />
                </div>
            </div>
        </>
    )
}

export default Main_viii;