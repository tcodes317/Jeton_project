function Header_i(){
    return(
        <>
            <div className="mx-auto md:container md:pt-4 xxxs:px-4 md:px-8 border-b-2 border-b-grey pb-4">
                <header className="flex items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-4xl font-intel font-bold text-white">Jeton</h1>
                        <nav className="space-x-4 lg:flex items-center relative top-1 left-40 xxxs:hidden" id="navv">
                            <div className="relative">
                                <a className="text-white border-r-2 font-bold pr-4">Personal</a>
                                <nav className="flex items-center flex-col rounded-md w absolute bg-white text-black hidden">
                                    <a className="py-3 hover:bg-orangered cursor-pointer hover:bg-orangered transition-all text-grey-300 truncate px-4">Jeton Card</a>
                                    <a className="py-3 hover:bg-orangered cursor-pointer hover:bg-orangered transition-all text-grey-300 truncate">Jeton Cash</a>
                                    <a className="py-3 hover:bg-orangered cursor-pointer hover:bg-orangered transition-all text-grey-300 truncate text-left">Fees</a>
                                </nav>
                            </div>
                            <a className="text-white border-r-2 pr-4 font-bold">Business</a>
                            <a className="text-white border-r-2 pr-4 font-bold">Merchants</a>
                            <div className="relative">
                                <a className="text-white border-r-2 pr-4 font-bold">Company</a>
                                <nav className="flex items-center flex-col hidden absolute bg-white rounded-md">
                                    <a className="py-3 hover:bg-orangered cursor-pointer hover:bg-orangered transition-all w-36 text-grey-300 truncate px-4 hover:bg-orange-300 rounded-tl-md rounded-tr-md">Affiliates</a>
                                    <a className="py-3 hover:bg-orangered cursor-pointer hover:bg-orangered transition-all w-36 text-grey-300 truncate px-4 hover:bg-orange-300">About us</a>
                                    <a className="py-3 hover:bg-orangered cursor-pointer hover:bg-orangered transition-all w-36 text-grey-300 truncate px-4 hover:bg-orange-300 rounded-bl-md rounded-br-md">Newsroom</a>
                                </nav>
                            </div>
                        </nav>
                    </div>
                    <div className="relative text-white">
                        <div className="lg:hidden mt-3 xxxs:space-x-3 flex">
                            <i className="fa fa-search p-3 text-xl rounded-full px-4 h-6/12 block hover:bg-black text-white"></i>
                            <i className="fa fa-bars p-3 text-xl rounded-full px-4 h-6/12 block hover:bg-black text-white"></i>
                        </div>
                        <nav className="space-x-6 lg:flex items-center xxxs:hidden">
                            <a>Help</a>
                            <a>Login</a>
                            <button className="border-2 rounded-md space-x-2 px-4 py-2 hover:bg-orange-500 transition-all flex items-center">
                                <span>Sign Up</span>
                                <i className="fa fa-arrow-right"></i>
                            </button>
                            <div className="relative">
                                <button className="flex items-center space-x-2 border-2 rounded-md px-4 py-2 justify-between">
                                    <span>EN</span>
                                    <i className="fa fa-angle-down"></i>
                                </button>
                                <nav className="absolute bg-white text-black rounded-md top-12 hidden">
                                    <div className="px-4 py-2 hover:bg-orange-300 rounded-tl-md cursor-pointer rounded-tr-md">Deutsch</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Espanol</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Portugues</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Russian</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Turkce</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Chineese</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Dutch</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Polski</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Italiano</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Francias</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Bokmal</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 cursor-pointer">Thai</div>
                                    <div className="px-4 py-2 hover:bg-orange-300 rounded-bl-md cursor-pointer rounded-br-md">Vietnamese</div>
                                </nav>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header_i;