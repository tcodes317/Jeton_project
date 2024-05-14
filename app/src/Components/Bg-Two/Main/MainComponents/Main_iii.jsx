import Card from "./../../../../assets/jetoncard-card.png";

function Main_iii(){
    return(
        <>
            <div className="relative mt-32 mb-20">
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
        </>
    )
}
export default Main_iii;