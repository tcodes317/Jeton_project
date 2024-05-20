function Header_i(){
    return(
        <>
            <div className="flex flex-col items-center relative top-20">
                <h1 className="md:text-8xl xxxs:text-4xl font-bold md:my-6 text-white">One Wallet For All</h1>
                <h4 className="my-4 md:text-4xl text-white font-bold">Single account for your payments.</h4>
                <div className="relative my-6">
                    <button className="p-4 bg-white text-black px-14 rounded-lg">
                        <div className="font-bold">Sign up for Free</div>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Header_i;