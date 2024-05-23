import imgI from "./../../../../assets/personal-news (1).png";

function Main_v(){
    return(
        <>
            <div className="relative pt-28">
                <div className="mb-8">
                    <h1 className="text-center font-bold text-3xl md:text-5xl">Latest News From Jeton</h1>
                    <p className="text-center text-lg mt-3 md:text-xl md:mt-6">One of the fastest-growing companies in Europe.</p>
                </div>
                <div className="flex xxxs:flex-col md:flex-col xxxs:space-y-6 md:mt-12 md:space-y-6 md:space-x-0 items-center justify-center">
                    <div className="bg-white p-8 py-12 md:w-11/12 rounded-xl">
                        <p className="text-2xl">Jeton, found its place among the top <span className="font-bold">1000 largest growing companies in Europe</span> as ranked by <span className="font-bold">Financial Times (FT)</span> and compiled in collaboration with data provider <span className="font-bold">Statista.</span> It placed <span className="font-bold">#75</span> on the <span className="font-bold">FT1000</span> list, showing some of Europ's rapidly expanding businesses.</p>
                        <div className="mt-8 md:mt-12">
                            <button className="border-2 border-black p-3 md:bg-black md:text-white md:p-6 md:px-14 md:truncate px-8 rounded-xl xxxs:w-full md:w-52">
                                <span className="font-bold">Learn more</span>
                            </button>
                        </div>
                    </div>
                    <div className="md:w-11/12">
                        <img src={imgI} srcset={imgI} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main_v;