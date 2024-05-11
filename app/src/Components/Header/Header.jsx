function Header(){
    return (
        <>
            <div className="mx-auto bg-black-500">
                <header className="flex items-center justify-between">
                    <div className="">
                        <h1 className="text-4xl font-intel">Jeton</h1>
                    </div>
                    <div className="relative">
                        <nav>
                            <a>Help</a>
                            <a>Login</a>
                            <button>
                                <span>Sign Up</span>
                                
                            </button>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header;