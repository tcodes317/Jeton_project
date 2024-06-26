import COne from "./../../../../assets/c1.png";
import CTwo from "./../../../../assets/c2.png";
import CThree from "./../../../../assets/c3.png";
import CFour from "./../../../../assets/c4.png";

function Main_ii(){
    return(
        <>
            <div className="relative">
                <div className="mt-32 mb-20">
                    <h4 className="text-center font-bold md:text-2xl xxxs:text-3xl text-gray-600 mb-4 xlg:text-4xl xxlg:text-5xl">It's simple</h4>
                    <h1 className="text-center font-bold text-4xl mb-6 xxxs:text-2xl xlg:text-4xl xxlg:text-5xl">Have more fun with your money</h1>
                    <h4 className="text-center font-bold text-xl text-gray-400 xxxs:text-sm xlg:text-xl xxlg:text-2xl">Way better wallet for a more entertaining world.</h4>
                </div>
                <div className="flex xxlg:scale-100 md:flex-row md:space-y-0 xxxs:space-y-4 xxxs:flex-col items-center md:space-x-6 justify-center" id="card-flex-container">
                    <div className="md:space-y-6 border-2 xxxs:space-y-4">
                        <div className="block xxxs:w-60 md:w-60 shadow-md bg-white rounded-lg" id="card">
                            <h1 className="text-center font-bold text-2xl w-7/12 mx-auto py-4">Move your money.</h1>
                            <img src={COne} srcset={COne} className="mx-auto py-4"/>
                            <i className="fa fa-"></i>
                        </div>
                        <div className="block xxxs:w-60 md:w-60 shadow-md bg-white rounded-lg" id="">
                            <h1 className="text-center font-bold text-2xl w-7/12 mx-auto py-4">Spend globally</h1>
                            <img src={CTwo} srcset={CTwo} className="mx-auto w-5/12 py-6" />
                            <i className="fa fa-"></i>
                        </div>
                    </div>
                    <div className="md:space-y-6 border-2 xxxs:space-y-4">
                        <div className="block xxxs:w-60 md:py-2 md:w-60 shadow-md bg-white rounded-lg" id="">
                            <h1 className="text-center font-bold text-2xl w-7/12 mx-auto py-4">Enjoy with crypto</h1>
                            <img src={CThree} srcset={CThree} className="mx-auto w-5/12 py-4" />
                            <i className="fa fa-"></i>
                        </div>
                        <div className="block xxxs:w-60 md:w-60 shadow-md bg-white rounded-lg" id="">
                            <h1 className="text-center font-bold text-2xl w-7/12 mx-auto py-4">Save money with us.</h1>
                            <img src={CFour} srcset={CFour} className="mx-auto w-5/12 py-6" />
                            <i className="fa fa-"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_ii;